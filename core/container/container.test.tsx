import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Container from '.'

describe('loads and displays greeting', async () => {
  render(<Container>Hello</Container>)

  expect(screen.getByText('Hello')).not.toBeNull()
})
