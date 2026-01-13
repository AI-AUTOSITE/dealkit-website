import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'DealKit - Free Deal Management for Creators'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Purple glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            D
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            DealKit
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#a1a1aa',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Deal Management for Creators & Influencers
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '20px',
          }}
        >
          {['📊 Track Deals', '🏢 Manage Brands', '✉️ Email Templates'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '24px',
                color: '#d4d4d8',
                background: 'rgba(255,255,255,0.05)',
                padding: '12px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Free badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '24px',
            color: '#22c55e',
            fontWeight: '600',
          }}
        >
          🎁 100% Free Forever
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
