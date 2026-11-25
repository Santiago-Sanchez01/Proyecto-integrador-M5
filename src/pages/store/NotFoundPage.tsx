import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="px-6 py-20 text-center">
      <p className="font-display text-9xl text-vault-gold">404</p>

      <h1 className="mt-4 text-4xl">Perdido en el multiverso</h1>

      <p className="mt-4 text-vault-secondary">
        La página que estás buscando pertenece a otro universo.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-md bg-vault-gold px-6 py-3 font-semibold text-vault-background transition-colors duration-normal hover:bg-vault-gold-hover"
      >
        Volver a la bóveda
      </Link>
    </section>
  )
}

export default NotFoundPage
