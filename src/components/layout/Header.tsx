import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../common/Logo.tsx'

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Catálogo', to: '/shop' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-vault-border bg-vault-background">
      <div className="bg-vault-surface px-4 py-2 text-center">
        <p className="text-xs tracking-widest text-vault-gold">
          TU UNIVERSO GEEK, EN UN SOLO LUGAR
        </p>
      </div>

      <div className="mx-auto flex max-w-vault items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-normal hover:text-vault-gold ${
                  isActive ? 'text-vault-gold' : 'text-vault-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            aria-label="Ver carrito"
            className="transition-colors duration-normal hover:text-vault-gold"
          >
            <ShoppingBag size={22} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="p-1 md:hidden"
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        className={`border-t border-vault-border px-4 py-4 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-md px-3 py-3 text-sm ${
                isActive ? 'bg-vault-surface text-vault-gold' : 'text-vault-secondary'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
