import CSS from "csstype";

export type Display = CSS.Property.Display;

const display = `
  ${({ display }) => display && `display: ${display}`};
`;

export default display;
