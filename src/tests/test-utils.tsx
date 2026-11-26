import { render, type RenderOptions } from '@testing-library/react'

import type { ReactElement, ReactNode } from 'react'

import { MemoryRouter } from 'react-router-dom'

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[]
}

function renderWithProviders(ui: ReactElement, options: CustomRenderOptions = {}) {
  const { initialEntries = ['/'], ...renderOptions } = options

  function Wrapper({ children }: { children: ReactNode }) {
    return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  }

  return render(ui, {
    ...renderOptions,
    wrapper: Wrapper,
  })
}

export { renderWithProviders }
