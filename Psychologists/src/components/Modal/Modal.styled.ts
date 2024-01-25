import styled from "styled-components";
import { FlexCenter } from "../../styles/GlobalStyles";

export const StyledBackdrop = styled(FlexCenter)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--transparent-black);
  z-index: 100;
`;

export const StyledModal = styled.div`
  z-index: 101;
  top: 0;
  left: 0;
  padding: 64px;
  width: 566px;
  position: relative;
  border-radius: 30px;
  background-color: var(--primary-white);
`;
