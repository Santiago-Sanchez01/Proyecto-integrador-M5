import vaultLogo from '../../assets/vault-logo.svg'

function HomePage() {
  const technologies = ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS']

  return (
    <section
      className="
        relative flex min-h-screen items-center
        justify-center overflow-hidden
        bg-vault-background px-6 py-12
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_center,_#D4AF3710,_transparent_65%)]
        "
      />

      <section className="relative w-full max-w-2xl text-center">
        <img
          src={vaultLogo}
          alt=""
          className="
            mx-auto mb-8 h-28 w-28
            transition-transform duration-slow
            hover:scale-105 sm:h-36 sm:w-36
          "
        />

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-vault-gold">
          La bóveda está despertando
        </p>

        <h1 className="text-6xl leading-none tracking-wide sm:text-8xl">
          COMIC <span className="text-vault-gold">VAULT</span>
        </h1>

        <h2 className="mt-4 text-2xl tracking-wide text-vault-secondary sm:text-3xl">
          Todos los universos. Una sola bóveda.
        </h2>

        <div className="mx-auto my-8 h-px w-24 bg-vault-gold" />

        <p className="mx-auto max-w-md text-sm leading-relaxed text-vault-secondary sm:text-base">
          Estamos construyendo una nueva experiencia para los amantes de los cómics, los
          coleccionables y la cultura geek.
        </p>

        <div
          className="
            mx-auto mt-8 inline-flex items-center gap-2
            rounded-full border border-vault-border
            bg-vault-surface px-4 py-2 text-sm
          "
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-vault-success" />

          <span className="text-vault-success">Entorno de desarrollo listo</span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md border border-vault-border
                bg-vault-surface px-3 py-2
                text-xs text-vault-secondary
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <p className="mt-12 text-xs text-vault-muted">COMIC VAULT · Argentina · v0.1.0</p>
      </section>
    </section>
  )
}

export default HomePage
