import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
  color: var(--primary-black);
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
