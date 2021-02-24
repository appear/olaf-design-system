export type SIZE = 'sm' | 'md' | 'lg'

export const size: {
  [key in SIZE]: string
} = {
  sm: '375px',
  md: '768px',
  lg: '1024px',
}
