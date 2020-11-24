import { css } from 'styled-components'
import { SIZE } from '../../theme/size'
import media, { MediaProps } from '../media'

export type Width = {
    width?: MediaProps | string | number
}

const width = css<Width>`
  ${({ width }) => {
    if (typeof width === 'string') {
        return `width: ${width};`
    }

    if (typeof width === 'number') {
        return `width: ${width}px;`
    } 
  }}

  ${({ width }) => typeof width === 'object' && media(width)}
`;

export default width;
