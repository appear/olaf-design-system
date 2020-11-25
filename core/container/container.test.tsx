import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Container from '.'

describe('Container', () => {
  it('Render', () => {
    render(<Container>Hello</Container>)

    expect(screen.getByText('Hello')).not.toBeNull()
  })
})
