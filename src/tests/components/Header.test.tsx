import { describe, expect, it } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from '../../components/layout/Header'
import { renderWithProviders } from '../test-utils'

describe('Header', () => {
  it('renders the main navigation links', () => {
    renderWithProviders(<Header />)

    const navigation = screen.getByRole('navigation', {
      name: 'Navegación principal',
    })

    expect(within(navigation).getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')

    expect(within(navigation).getByRole('link', { name: 'Catálogo' })).toHaveAttribute(
      'href',
      '/shop',
    )
  })

  it('renders a link to the shopping cart', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('link', { name: 'Ver carrito' })).toHaveAttribute('href', '/cart')
  })

  it('marks the current route as active', () => {
    renderWithProviders(<Header />, {
      initialEntries: ['/shop'],
    })

    const navigation = screen.getByRole('navigation', {
      name: 'Navegación principal',
    })

    expect(within(navigation).getByRole('link', { name: 'Catálogo' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    expect(within(navigation).getByRole('link', { name: 'Inicio' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('starts with the mobile menu closed', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()

    renderWithProviders(<Header />)

    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))

    const closeButton = screen.getByRole('button', {
      name: 'Cerrar menú',
    })

    expect(closeButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(closeButton)

    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu after selecting a link', async () => {
    const user = userEvent.setup()

    renderWithProviders(<Header />)

    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))

    const mobileNavigation = screen.getByRole('navigation', {
      name: 'Navegación móvil',
    })

    await user.click(
      within(mobileNavigation).getByRole('link', {
        name: 'Catálogo',
      }),
    )

    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
