import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  StyledHeaderHidden,
  StyledHeaderMenu,
  StyledLogo,
  StyledLogoSpan,
  StyledMenuBtn,
  StyledMenuModal,
} from "./Layout.styled";
import { Container } from "../../styles/GlobalStyles";
import sprite from "../../images/sprite.svg";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import { StyledBtn } from "../Modal/Modal.styled";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setShowModal(false);
  }, [location.pathname]);

  return (
    <div>
      <StyledHeaderMenu>
        <StyledLogo onClick={() => navigate("/Psychologists/")}>
          psychologists.<StyledLogoSpan>services</StyledLogoSpan>
        </StyledLogo>
        <StyledMenuBtn onClick={toggleModal}>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </StyledMenuBtn>
      </StyledHeaderMenu>
      <Container>
        <StyledHeaderHidden>
          <Header />
        </StyledHeaderHidden>
        {showModal && (
          <StyledMenuModal>
            <StyledBtn onClick={toggleModal}>
              <svg width={30} height={30}>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </StyledBtn>
            <Header />
          </StyledMenuModal>
        )}
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
export default Layout;
