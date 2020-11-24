import { css } from 'styled-components'
import { size, SIZE } from '../theme/size'
import addUnit from '../utils/add-unit'

export type MediaProps = {
    [key in SIZE]?: string | number
} 

function media(tag: string, values: MediaProps) {
    return css`
        @media (max-width: ${size.sm}) {
            ${values.sm ? `${tag}: ${addUnit(values.sm)};` : ''}
        }
        @media (max-width: ${size.md}) {
            ${values.md ? `${tag}: ${addUnit(values.md)};` : ''}
        }
        @media (max-width: ${size.lg}) {
            ${values.lg ? `${tag}: ${addUnit(values.lg)};` : ''}
        }
    `
}

export default media