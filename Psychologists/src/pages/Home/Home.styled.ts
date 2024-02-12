import styled from "styled-components";
import { StyledOrangeBtn } from "../../components/Layout/Header/Header.styled";
import { FlexCenter } from "../../styles/GlobalStyles";

export const StyledHomeWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 78px 0;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const StyledTextWrapper = styled.div`
  padding: 15px 0;
  width: 300px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 20px 0;
    width: 330px;
  }
  @media (min-width: 1440px) {
    padding: 25px 0;
    width: 595px;
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
    line-height: 82px;
    letter-spacing: -1.6px;
  }
`;

export const StyledTitleSpan = styled.span`
  color: var(--primary-orange);
  font-style: italic;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.36px;
  width: 280px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    width: 510px;
  }
`;

export const StyledBtn = styled(StyledOrangeBtn)`
  padding: 18px 50px;
  gap: 18px;
  font-size: 20px;
`;

export const StyledImgWrapper = styled.div`
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 20px;
  object-fit: cover;
  width: 264px;
  @media (min-width: 768px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    width: 464px;
    height: 526px;
  }
`;

export const StyledUsersIcon = styled(FlexCenter)`
  position: absolute;
  top: 20px;
  right: -10px;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  background-color: var(--primary-yellow);
  border-radius: 10px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    top: 40px;
    right: -30px;
  }
`;

export const StyledQuestionIcon = styled(StyledUsersIcon)`
  top: 185px;
  left: -10px;
  transform: rotate(-15deg);
  background-color: var(--primary-green);
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    top: 185px;
    left: -30px;
  }
`;

export const StyledCheckWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: var(--primary-orange);
  color: var(--primary-white);
  border-radius: 20px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    position: absolute;
    width: 311px;
    bottom: 75px;
    left: -101px;
    padding: 32px;
  }
`;

export const StyledCheckImg = styled(FlexCenter)`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: var(--primary-white);
`;

export const StyledCheckText = styled.p`
  color: var(--transparent-white);
  font-size: 12px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const StyledCheckNumber = styled.p`
  font-size: 20px;
  font-weight: 600;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    font-weight: 700;
  }
`;
