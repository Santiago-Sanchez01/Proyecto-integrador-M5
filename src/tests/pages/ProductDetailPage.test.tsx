import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'

import ProductDetailPage from '../../pages/store/ProductDetailPage'
import { renderWithProviders } from '../test-utils'

function renderProductDetail(productId: string) {
  return renderWithProviders(
    <Routes>
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>,
    {
      initialEntries: [`/products/${productId}`],
    },
  )
}

describe('ProductDetailPage', () => {
  it('renders the product detail heading', () => {
    renderProductDetail('demo')

    expect(
      screen.getByRole('heading', {
        name: 'Detalle del producto',
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it.each(['demo', 'batman-001', 'berserk-001'])(
    'reads the dynamic product identifier %s',
    (productId) => {
      renderProductDetail(productId)

      expect(screen.getByText(`Identificador: ${productId}`)).toBeInTheDocument()
    },
  )

  it('provides a link back to the catalog', () => {
    renderProductDetail('demo')

    expect(
      screen.getByRole('link', {
        name: 'Volver al catálogo',
      }),
    ).toHaveAttribute('href', '/shop')
  })
})
