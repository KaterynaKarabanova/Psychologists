import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.16px;
  color: var(--primary-black);
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    font-size: 16px;
    font-weight: 400;
    gap: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--primary-black);
  transition: all var(--transition);
  &:hover {
    color: var(--primary-orange);
  }
  &:focus {
    color: var(--primary-orange);
  }
`;
