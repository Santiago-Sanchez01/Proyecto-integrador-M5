import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

function CartPage() {
  return (
    <section className="px-6 py-20 text-center">
      <ShoppingBag size={64} aria-hidden="true" className="mx-auto mb-6 text-vault-gold" />

      <h1 className="text-5xl">Tu carrito está vacío</h1>

      <p className="mt-4 text-vault-secondary">Tu próxima aventura comienza en nuestra bóveda.</p>

      <Link
        to="/shop"
        className="mt-8 inline-block rounded-md bg-vault-gold px-6 py-3 font-semibold text-vault-background transition-colors duration-normal hover:bg-vault-gold-hover"
      >
        Explorar colección
      </Link>
    </section>
  )
}

export default CartPage
