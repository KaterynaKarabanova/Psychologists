import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import {
  StyledAvatarDiv,
  StyledBtnWrapper,
  StyledHeader,
  StyledLogo,
  StyledLogoSpan,
  StyledOrangeBtn,
  StyledTranspBtn,
  StyledUserName,
} from "./Layout.styled";
import { Container } from "../../styles/GlobalStyles";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Login from "../LogIn/Login";
import Registration from "../Registration/Registration";
import { accessToken, userNameInfo } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../redux/actions";
import sprite from "../../images/sprite.svg";

const Layout = () => {
  const token = useSelector(accessToken);
  const userName = useSelector(userNameInfo);
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const auth = getAuth();

  const toggleLogin = () => {
    setLoginModal((prev) => !prev);
  };

  const toggleRegister = () => {
    setRegisterModal((prev) => !prev);
  };

  const onSignOut = () => {
    signOut(auth);
    dispatch(setUser({ name: "", email: "", token: "" }));
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
            {token ? (
              <>
                <StyledAvatarDiv>
                  <svg width={24} height={24}>
                    <use href={`${sprite}#icon-user`} />
                  </svg>
                </StyledAvatarDiv>
                <StyledUserName>{userName}</StyledUserName>
                <StyledTranspBtn type="button" onClick={onSignOut}>
                  Log Out
                </StyledTranspBtn>
              </>
            ) : (
              <>
                {" "}
                <StyledTranspBtn onClick={() => setLoginModal(true)}>
                  Log In
                </StyledTranspBtn>
                <StyledOrangeBtn
                  onClick={() => setRegisterModal((prev) => !prev)}
                >
                  Registration
                </StyledOrangeBtn>
              </>
            )}
          </StyledBtnWrapper>
        </StyledHeader>
        {loginModal && (
          <Modal toggleModal={toggleLogin}>
            <Login toggleModal={toggleLogin} />
          </Modal>
        )}
        {registerModal && (
          <Modal toggleModal={toggleRegister}>
            <Registration toggleModal={toggleRegister} />
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
