import { describe, expect, it } from 'vitest'

import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import { useState } from 'react'

function TestCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>

      <button onClick={() => setCount((previous) => previous + 1)}>Incrementar</button>
    </div>
  )
}

describe('Testing infrastructure', () => {
  it('renders a React component correctly', () => {
    render(<TestCounter />)

    expect(screen.getByText('Contador: 0')).toBeInTheDocument()
  })

  it('updates the component after a user interaction', async () => {
    const user = userEvent.setup()

    render(<TestCounter />)

    await user.click(screen.getByRole('button', { name: 'Incrementar' }))

    expect(screen.getByText('Contador: 1')).toBeInTheDocument()
  })

  it('isolates state between tests', () => {
    render(<TestCounter />)

    expect(screen.getByText('Contador: 0')).toBeInTheDocument()
  })
})
