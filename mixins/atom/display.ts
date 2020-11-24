import CSS from "csstype";

export type Display = {display?: CSS.Property.Display};

const display = `
  ${({ display }: Display) => display && `display: ${display}`};
`;

export default display;
