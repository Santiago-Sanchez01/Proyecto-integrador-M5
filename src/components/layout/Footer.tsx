import { Link } from 'react-router-dom'
import Logo from '../common/Logo.tsx'

function Footer() {
  return (
    <footer className="border-t border-vault-border bg-vault-surface">
      <div className="mx-auto max-w-vault px-6 py-10 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <Logo size="sm" />

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-vault-secondary">
              Todos los universos. Una sola bóveda. Descubrí tu próxima historia y coleccioná lo
              extraordinario.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="mb-4 text-xl tracking-wide text-vault-gold">Explorá la bóveda</h2>

            <div className="flex flex-col items-start gap-3 text-sm text-vault-secondary">
              <Link to="/" className="hover:text-vault-gold">
                Inicio
              </Link>

              <Link to="/shop" className="hover:text-vault-gold">
                Catálogo
              </Link>

              <Link to="/cart" className="hover:text-vault-gold">
                Mi carrito
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-8 border-t border-vault-border pt-6 text-xs text-vault-muted">
          © {new Date().getFullYear()} Comic Vault · Argentina. Proyecto académico de e-commerce.
        </div>
      </div>
    </footer>
  )
}

export default Footer
