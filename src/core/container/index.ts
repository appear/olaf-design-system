import styled from 'styled-components'

import display, { Display } from 'src/mixins/atom/display'
import overflow, { Overflow } from 'src/mixins/atom/overflow'
import width, { Width } from 'src/mixins/atom/width'

export type ContainerProps = Display & Overflow & Width

const Container = styled.div<ContainerProps>`
  ${display}
  ${overflow}
  ${width}
`

export default Container
