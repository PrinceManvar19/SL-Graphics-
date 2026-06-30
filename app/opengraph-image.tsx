import { ImageResponse } from 'next/og'

export const alt = 'SL Graphics - Visuals That Sell'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fbfaf6',
        color: '#171717',
        padding: '76px 88px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '760px' }}>
        <div style={{ display: 'flex', color: '#d9361e', fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>
          SL GRAPHICS / CREATIVE STUDIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, fontSize: 88, fontWeight: 700, lineHeight: 0.92 }}>
          <span>VISUALS</span>
          <span style={{ color: '#d9361e' }}>THAT SELL.</span>
        </div>
        <div style={{ display: 'flex', marginTop: 42, color: '#4f5b62', fontSize: 27 }}>
          Branding, posters, reels and cinematic video.
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: 230,
          height: 360,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          borderTop: '18px solid #d9361e',
          borderRight: '18px solid #d9361e',
          color: '#171717',
          fontSize: 92,
          fontWeight: 700,
          padding: '0 20px 12px 0',
        }}
      >
        SL
      </div>
    </div>,
    size,
  )
}
