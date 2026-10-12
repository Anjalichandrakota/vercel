import { useState } from 'react'
import { TrendingUp } from 'lucide-react'

type BrandProps = { light?: boolean; compact?: boolean }

export default function Brand({ light = false, compact = false }: BrandProps) {
  const [logoFailed, setLogoFailed] = useState(false)
  return (
    <a className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`} href="/" aria-label="Ascendiq home">
      {!logoFailed && (
        <img
          className="brand-image"
          src="/assets/ascendiq-logo.jpeg"
          alt=""
          onError={() => setLogoFailed(true)}
        />
      )}
      {logoFailed && <span className="brand-symbol" aria-hidden="true"><TrendingUp size={19} /></span>}
      <span className="brand-name">ascendiq<span className="brand-dot">.</span></span>
    </a>
  )
}