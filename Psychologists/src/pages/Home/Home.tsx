import { Container } from "../../styles/GlobalStyles";
import {
  StyledBtn,
  StyledCheckImg,
  StyledCheckNumber,
  StyledCheckText,
  StyledCheckWrapper,
  StyledHomeWrapper,
  StyledImg,
  StyledImgWrapper,
  StyledQuestionIcon,
  StyledText,
  StyledTextWrapper,
  StyledTitle,
  StyledTitleSpan,
  StyledUsersIcon,
} from "./Home.styled";
import sprite from "../../images/sprite.svg";
import hero from "../../images/hero.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledHomeWrapper>
        <StyledTextWrapper>
          <StyledTitle>
            The road to the <StyledTitleSpan>depths</StyledTitleSpan> of the
            human soul
          </StyledTitle>
          <StyledText>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </StyledText>
          <StyledBtn onClick={() => navigate("/Psychologists/psychologists")}>
            Get started{" "}
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-arrow`} />
            </svg>
          </StyledBtn>
        </StyledTextWrapper>
        <StyledImgWrapper>
          <StyledImg src={hero} alt="woman in office" />
          <StyledUsersIcon>
            <svg width={30} height={30}>
              <use href={`${sprite}#icon-users`} />
            </svg>
          </StyledUsersIcon>
          <StyledQuestionIcon>
            <svg width={25} height={25}>
              <use href={`${sprite}#icon-question`} />
            </svg>
          </StyledQuestionIcon>
          <StyledCheckWrapper>
            <StyledCheckImg>
              <svg width={30} height={30}>
                <use href={`${sprite}#icon-check`} />
              </svg>
            </StyledCheckImg>
            <div>
              <StyledCheckText>Experienced psychologists</StyledCheckText>
              <StyledCheckNumber>15,000</StyledCheckNumber>
            </div>
          </StyledCheckWrapper>
        </StyledImgWrapper>
      </StyledHomeWrapper>
    </Container>
  );
};
export default Home;
