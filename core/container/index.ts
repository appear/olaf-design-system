import styled from 'styled-components'

import display, { Display } from '../../mixins/atom/display'
import overflow, { Overflow } from '../../mixins/atom/overflow'
import width, { Width } from '../../mixins/atom/width'

export type ContainerProps = Display & Overflow & Width

const Container = styled.div<ContainerProps>`
  ${display}
  ${overflow}
  ${width}
`

export default Container
