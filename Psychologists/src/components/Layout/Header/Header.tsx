import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Login from "../../LogIn/Login";
import Registration from "../../Registration/Registration";
import { accessToken, userNameInfo } from "../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../../redux/actions";
import sprite from "../../../images/sprite.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  StyledAvatarDiv,
  StyledBtnWrapper,
  StyledHeader,
  StyledOrangeBtn,
  StyledTranspBtn,
  StyledUserName,
} from "./Header.styled";
import { StyledLogo, StyledLogoSpan } from "../Layout.styled";

const Header = () => {
  const navigate = useNavigate();
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
    <>
      <StyledHeader>
        <StyledLogo onClick={() => navigate("/Psychologists/")}>
          psychologists.<StyledLogoSpan>services</StyledLogoSpan>
        </StyledLogo>

        <Navigation />
        <ThemeSwitcher />
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
    </>
  );
};
export default Header;
