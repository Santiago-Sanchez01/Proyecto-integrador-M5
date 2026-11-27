import { describe, expect, it } from 'vitest'
import { screen, within } from '@testing-library/react'

import Footer from '../../components/layout/Footer'
import { renderWithProviders } from '../test-utils'

describe('Footer', () => {
  it('renders the Comic Vault branding', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByRole('link', { name: 'Comic Vault - Inicio' })).toBeInTheDocument()
  })

  it('renders the footer navigation links', () => {
    renderWithProviders(<Footer />)

    const navigation = screen.getByRole('navigation', {
      name: 'Navegación del pie de página',
    })

    expect(within(navigation).getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')

    expect(within(navigation).getByRole('link', { name: 'Catálogo' })).toHaveAttribute(
      'href',
      '/shop',
    )

    expect(within(navigation).getByRole('link', { name: 'Mi carrito' })).toHaveAttribute(
      'href',
      '/cart',
    )
  })

  it('displays the current copyright year', () => {
    renderWithProviders(<Footer />)

    const currentYear = new Date().getFullYear()

    expect(
      screen.getByText(
        `© ${currentYear} Comic Vault · Argentina. Proyecto académico de e-commerce.`,
      ),
    ).toBeInTheDocument()
  })
})
