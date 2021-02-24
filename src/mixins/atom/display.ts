import { css } from 'styled-components'
import CSS from 'csstype'

export type Display = { display?: CSS.Property.Display }

const display = css<Display>`
  ${({ display }) => display && `display: ${display}`};
`

export default display
