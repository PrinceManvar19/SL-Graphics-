import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  service?: string
  message?: string
}

function validate(payload: ContactPayload) {
  const errors: string[] = []

  if (!payload.name || payload.name.trim().length < 2) errors.push('Name is required.')
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) errors.push('A valid email is required.')
  if (!payload.service) errors.push('Service is required.')
  if (!payload.message || payload.message.trim().length < 10) errors.push('Message must be at least 10 characters.')

  return errors
}

async function postWebhook(payload: Required<ContactPayload>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) return false

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, source: 'SL Graphics website' }),
  })

  if (!response.ok) throw new Error('Webhook delivery failed.')
  return true
}

async function sendResendEmail(payload: Required<ContactPayload>) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'SL Graphics <onboarding@resend.dev>'

  if (!apiKey || !to) return false

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New SL Graphics lead: ${payload.service}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Service: ${payload.service}`,
        '',
        payload.message,
      ].join('\n'),
    }),
  })

  if (!response.ok) throw new Error('Email delivery failed.')
  return true
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const errors = validate(payload)
  if (errors.length > 0) return NextResponse.json({ error: errors[0] }, { status: 400 })

  const cleanPayload = {
    name: payload.name!.trim(),
    email: payload.email!.trim(),
    service: payload.service!.trim(),
    message: payload.message!.trim(),
  }

  try {
    const deliveredByWebhook = await postWebhook(cleanPayload)
    const deliveredByEmail = deliveredByWebhook ? false : await sendResendEmail(cleanPayload)

    if (!deliveredByWebhook && !deliveredByEmail) {
      return NextResponse.json({ error: 'Contact delivery is not configured yet.' }, { status: 501 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not send your message. Please try WhatsApp instead.' }, { status: 502 })
  }
}
