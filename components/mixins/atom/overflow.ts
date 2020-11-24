
import CSS from "csstype"

export type Overflow = {
  overflow?: CSS.Property.Overflow;
};

const overflow = `
  ${({ overflow }: Overflow) => overflow && `overflow: ${overflow};`}
`;

export default overflow;
