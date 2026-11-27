import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

import Logo from '../../components/common/Logo'
import { renderWithProviders } from '../test-utils'

describe('Logo', () => {
  it('renders the Comic Vault brand', () => {
    renderWithProviders(<Logo />)

    expect(screen.getByRole('link', { name: 'Comic Vault - Inicio' })).toBeInTheDocument()
  })

  it('links to the home page', () => {
    renderWithProviders(<Logo />)

    expect(screen.getByRole('link', { name: 'Comic Vault - Inicio' })).toHaveAttribute('href', '/')
  })

  it.each(['sm', 'md', 'lg'] as const)('renders correctly with size %s', (size) => {
    renderWithProviders(<Logo size={size} />)

    expect(screen.getByRole('link', { name: 'Comic Vault - Inicio' })).toBeInTheDocument()
  })
})
