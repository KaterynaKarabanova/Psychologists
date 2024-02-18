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
  @media (min-width: 1440px) {
    flex-direction: row;
    font-size: 16px;
    font-weight: 400;
    gap: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) =>
    props.to === window.location.pathname
      ? "var(--primary-orange)"
      : "var(--primary-black)"};
  transition: all var(--transition);
  position: relative;
  &:hover,
  &:focus,
  &:active {
    color: var(--primary-orange);
  }

  &::after {
    content: "";
    display: ${(props) =>
      props.to === window.location.pathname ? "block" : "none"};
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--primary-orange);
    top: 25px;
    right: 50%;
  }
`;
