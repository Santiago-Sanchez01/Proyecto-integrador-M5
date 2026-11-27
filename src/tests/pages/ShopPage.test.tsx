import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import ShopPage from '../../pages/store/ShopPage'
import { renderWithProviders } from '../test-utils'

describe('ShopPage', () => {
  it('renders the catalog heading', () => {
    renderWithProviders(<ShopPage />)

    expect(
      screen.getByRole('heading', {
        name: 'Explorá la bóveda',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('provides a link to the product detail page', () => {
    renderWithProviders(<ShopPage />)

    expect(
      screen.getByRole('link', {
        name: 'Probar detalle de producto',
      }),
    ).toHaveAttribute('href', '/products/demo')
  })
})
