import { Link } from 'react-router-dom'
import vaultLogo from '../../assets/vault-logo.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const logoSizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
}

function Logo({ size = 'md' }: LogoProps) {
  return (
    <Link to="/" aria-label="Comic Vault - Inicio" className="inline-flex items-center gap-3">
      <img src={vaultLogo} alt="" className={logoSizes[size]} />

      <span className="font-display text-2xl tracking-wider">
        COMIC <span className="text-vault-gold">VAULT</span>
      </span>
    </Link>
  )
}

export default Logo
