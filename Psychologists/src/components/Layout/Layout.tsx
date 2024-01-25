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
import { useState } from "react";
import Modal from "../Modal/Modal";

const Layout = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const toggleLogin = () => {
    setLoginModal((prev) => !prev);
  };
  const toggleRegister = () => {
    setRegisterModal((prev) => !prev);
  };
  return (
    <div>
      <Container>
        <StyledHeader>
          <StyledLogo href="/">
            psychologists.<StyledLogoSpan>services</StyledLogoSpan>
          </StyledLogo>
          <Navigation />
          <StyledBtnWrapper>
            <StyledTranspBtn onClick={() => setLoginModal(true)}>
              Log In
            </StyledTranspBtn>
            <StyledOrangeBtn onClick={() => setRegisterModal((prev) => !prev)}>
              Registration
            </StyledOrangeBtn>
          </StyledBtnWrapper>
        </StyledHeader>
        {loginModal && (
          <Modal toggleModal={toggleLogin}>
            <h1>LogIn</h1>
          </Modal>
        )}
        {registerModal && (
          <Modal toggleModal={toggleRegister}>
            <h1>Registration</h1>
          </Modal>
        )}
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
export default Layout;
