import styled from "styled-components";
import { StyledOrangeBtn } from "../Layout/Layout.styled";

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  color: var(--transparent-black);
  margin-bottom: 40px;
`;
export const StyledLabel = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 18px;
  position: relative;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 16px 50px 16px 18px;
  height: 52px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--transparent-gray);
`;

export const StyledBtn = styled(StyledOrangeBtn)`
  width: 100%;
`;
