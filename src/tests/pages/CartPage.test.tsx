import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import CartPage from '../../pages/store/CartPage'
import { renderWithProviders } from '../test-utils'

describe('CartPage', () => {
  it('displays the empty cart state', () => {
    renderWithProviders(<CartPage />)

    expect(
      screen.getByRole('heading', {
        name: 'Tu carrito está vacío',
      }),
    ).toBeInTheDocument()
  })

  it('allows the user to return to the catalog', () => {
    renderWithProviders(<CartPage />)

    expect(
      screen.getByRole('link', {
        name: 'Explorar colección',
      }),
    ).toHaveAttribute('href', '/shop')
  })
})
