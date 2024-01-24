import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to={"/Psychologists/"}>Home</StyledNavLink>
      <StyledNavLink to={"/Psychologists/psychologists"}>
        Psychologists
      </StyledNavLink>
      <StyledNavLink to={"/Psychologists/favorite"}>Favorite</StyledNavLink>
    </StyledNav>
  );
};
export default Navigation;
