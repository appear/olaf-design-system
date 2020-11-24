import { css } from 'styled-components'
import { size, SIZE } from '../theme/size'

export type MediaProps = {
    [key in SIZE]?: string | number
} 

function media(props: MediaProps) {
    return css`
        @media (max-width: ${size.sm}) {
            ${props.sm ? `width: ${props.sm}px;` : ''}
        }
        @media (max-width: ${size.md}) {
            ${props.md ? `width: ${props.md}px;` : ''}
        }
        @media (max-width: ${size.lg}) {
            ${props.lg ? `width: ${props.lg}px;` : ''}
        }
    `
}

export default media