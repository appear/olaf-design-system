import { css } from 'styled-components'
import media, { MediaProps } from '../media'
import addUnit from '../../utils/add-unit'

export type Width = {
  width?: MediaProps | string | number
}

const width = css<Width>`
  ${({ width }) =>
    width
      ? typeof width === 'object'
        ? media('width', width)
        : addUnit(width)
      : ''}
`

export default width
