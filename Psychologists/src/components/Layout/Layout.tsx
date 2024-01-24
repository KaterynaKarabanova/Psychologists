import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import {
  StyledBtnWrapper,
  StyledHeader,
  StyledLogo,
  StyledLogoSpan,
  StyledOrangeBtn,
  StyledTranspBtn,
} from "./Layout.styled";
import { Container } from "../../styles/GlobalStyles";

const Layout = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledLogo href="/">
          psychologists.<StyledLogoSpan>services</StyledLogoSpan>
        </StyledLogo>
        <Navigation />
        <StyledBtnWrapper>
          <StyledTranspBtn>Log In</StyledTranspBtn>
          <StyledOrangeBtn>Registration</StyledOrangeBtn>
        </StyledBtnWrapper>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default Layout;
