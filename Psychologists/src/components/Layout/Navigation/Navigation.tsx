import { useSelector } from "react-redux";
import { StyledNav, StyledNavLink } from "./Navigation.styled";
import { accessToken } from "../../../redux/selectors";

const Navigation = () => {
  const token = useSelector(accessToken);
  return (
    <StyledNav>
      <StyledNavLink to={"/Psychologists/"}>Home</StyledNavLink>
      <StyledNavLink to={"/Psychologists/psychologists"}>
        Psychologists
      </StyledNavLink>
      {token && (
        <StyledNavLink to={"/Psychologists/favorite"}>Favorite</StyledNavLink>
      )}
    </StyledNav>
  );
};
export default Navigation;
