import styled from "styled-components";

import display, { Display } from "../mixins/atom/display";
import overflow, { Overflow } from "../mixins/atom/overflow";

export type ContainerProps = Display & Overflow;

const Container = styled.div<ContainerProps>`
  ${display}
  ${overflow}
`;

export default Container;
