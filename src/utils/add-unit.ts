export type Unit = 'px' | '%' | 'rem' | 'em'

function addUnit(value: string | number, unit: Unit = 'px') {
  return typeof value === 'number' ? `${value}${unit}` : value
}

export default addUnit
