import React from 'react'

import Container from '../core/container'

export default {
  title: 'Core/Container',
  component: Container,
}

export const BaseContainer = () => (
  <Container width={{ lg: 200 }}>Hello</Container>
)
