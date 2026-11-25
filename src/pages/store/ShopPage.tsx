import { Link } from 'react-router-dom'

function ShopPage() {
  return (
    <section className="mx-auto max-w-vault px-6 py-16">
      <h1 className="text-5xl text-vault-gold">Explorá la bóveda</h1>

      <p className="mt-4 text-vault-secondary">
        Próximamente: cómics, coleccionables y merchandising.
      </p>

      <Link to="/products/demo" className="mt-8 inline-block text-vault-gold underline">
        Probar detalle de producto
      </Link>
    </section>
  )
}

export default ShopPage
