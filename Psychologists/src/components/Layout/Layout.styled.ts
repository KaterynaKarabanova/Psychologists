import styled from "styled-components";
import { StyledHeader } from "./Header/Header.styled";

export const StyledMenuBtn = styled.button`
  background-color: transparent;
  position: absolute;
  right: 15px;
`;

export const StyledMenuModal = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 70px 20px;
  z-index: 10;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const StyledHeaderMenu = styled(StyledHeader)`
  flex-direction: row;
  padding: 38px 20px;
  @media (min-width: 768px) {
    padding: 38px 30px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const StyledHeaderHidden = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const StyledLogo = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-orange);
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  @media (min-width: 1440px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const StyledLogoSpan = styled.span`
  color: var(--primary-black);
`;
