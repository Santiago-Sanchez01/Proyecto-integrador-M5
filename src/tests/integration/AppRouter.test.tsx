import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../App'

describe('Application routing', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/')
  })

  it('renders the home page at the root route', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'COMIC VAULT',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('navigates from home to the catalog', async () => {
    const user = userEvent.setup()

    render(<App />)

    const navigation = screen.getByRole('navigation', {
      name: 'Navegación principal',
    })

    await user.click(
      within(navigation).getByRole('link', {
        name: 'Catálogo',
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: 'Explorá la bóveda',
        level: 1,
      }),
    ).toBeInTheDocument()

    expect(window.location.pathname).toBe('/shop')
  })

  it('navigates from the catalog to a product detail', async () => {
    const user = userEvent.setup()

    window.history.replaceState(null, '', '/shop')

    render(<App />)

    await user.click(
      screen.getByRole('link', {
        name: 'Probar detalle de producto',
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: 'Detalle del producto',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText('Identificador: demo')).toBeInTheDocument()

    expect(window.location.pathname).toBe('/products/demo')
  })

  it('navigates to the shopping cart', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('link', { name: 'Ver carrito' }))

    expect(
      await screen.findByRole('heading', {
        name: 'Tu carrito está vacío',
      }),
    ).toBeInTheDocument()

    expect(window.location.pathname).toBe('/cart')
  })

  it('returns from the empty cart to the catalog', async () => {
    const user = userEvent.setup()

    window.history.replaceState(null, '', '/cart')

    render(<App />)

    await user.click(
      screen.getByRole('link', {
        name: 'Explorar colección',
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: 'Explorá la bóveda',
        level: 1,
      }),
    ).toBeInTheDocument()

    expect(window.location.pathname).toBe('/shop')
  })

  it('renders the 404 page for an unknown route', () => {
    window.history.replaceState(null, '', '/universo-desconocido')

    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'Perdido en el multiverso',
      }),
    ).toBeInTheDocument()
  })

  it('recovers from an unknown route by returning home', async () => {
    const user = userEvent.setup()

    window.history.replaceState(null, '', '/universo-desconocido')

    render(<App />)

    await user.click(
      screen.getByRole('link', {
        name: 'Volver a la bóveda',
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: 'COMIC VAULT',
        level: 1,
      }),
    ).toBeInTheDocument()

    expect(window.location.pathname).toBe('/')
  })

  it.each(['/', '/shop', '/products/demo', '/cart', '/universo-desconocido'])(
    'preserves the store layout at %s',
    (path) => {
      window.history.replaceState(null, '', path)

      render(<App />)

      expect(screen.getByRole('banner')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    },
  )
})
