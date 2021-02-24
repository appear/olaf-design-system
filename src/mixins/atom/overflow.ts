import { css } from 'styled-components'
import CSS from 'csstype'

export type Overflow = {
  overflow?: CSS.Property.Overflow
}

const overflow = css<Overflow>`
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`

export default overflow
