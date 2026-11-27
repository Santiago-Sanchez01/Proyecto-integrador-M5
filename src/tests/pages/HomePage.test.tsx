import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import HomePage from '../../pages/store/HomePage'

describe('HomePage', () => {
  it('renders the main Comic Vault heading', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'COMIC VAULT',
      }),
    ).toBeInTheDocument()
  })

  it('displays the brand tagline', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Todos los universos. Una sola bóveda.',
      }),
    ).toBeInTheDocument()
  })

  it('displays the development status', () => {
    render(<HomePage />)

    expect(screen.getByText('Entorno de desarrollo listo')).toBeInTheDocument()
  })
})
