import { Link, useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <section className="mx-auto max-w-vault px-6 py-16">
      <h1 className="text-5xl text-vault-gold">Detalle del producto</h1>

      <p className="mt-4 text-vault-secondary">Identificador: {id}</p>

      <Link to="/shop" className="mt-8 inline-block text-vault-gold underline">
        Volver al catálogo
      </Link>
    </section>
  )
}

export default ProductDetailPage
