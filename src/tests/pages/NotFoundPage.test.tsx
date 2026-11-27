import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import NotFoundPage from '../../pages/store/NotFoundPage'
import { renderWithProviders } from '../test-utils'

describe('NotFoundPage', () => {
  it('displays the 404 error code', () => {
    renderWithProviders(<NotFoundPage />)

    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders the custom error heading', () => {
    renderWithProviders(<NotFoundPage />)

    expect(
      screen.getByRole('heading', {
        name: 'Perdido en el multiverso',
      }),
    ).toBeInTheDocument()
  })

  it('provides a link back to the home page', () => {
    renderWithProviders(<NotFoundPage />)

    expect(
      screen.getByRole('link', {
        name: 'Volver a la bóveda',
      }),
    ).toHaveAttribute('href', '/')
  })
})
