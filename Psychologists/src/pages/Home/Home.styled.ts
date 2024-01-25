import styled from "styled-components";
import { StyledOrangeBtn } from "../../components/Layout/Layout.styled";
import { FlexCenter } from "../../styles/GlobalStyles";

export const StyledHomeWrapper = styled.div`
  padding: 78px 0;
  display: flex;
  justify-content: space-between;
`;

export const StyledTextWrapper = styled.div`
  padding: 25px 0;
  width: 595px;
`;

export const StyledTitle = styled.h1`
  font-size: 80px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
`;

export const StyledTitleSpan = styled.span`
  color: var(--primary-orange);
  font-style: italic;
`;

export const StyledText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.36px;
  width: 510px;
  margin-bottom: 40px;
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
`;

export const StyledUsersIcon = styled(FlexCenter)`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  background-color: var(--primary-yellow);
  border-radius: 10px;
`;

export const StyledQuestionIcon = styled(StyledUsersIcon)`
  top: 185px;
  left: -30px;
  transform: rotate(-15deg);
  background-color: var(--primary-green);
`;

export const StyledCheckWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 75px;
  left: -101px;
  width: 311px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background-color: var(--primary-orange);
  color: var(--primary-white);
  border-radius: 20px;
`;

export const StyledCheckImg = styled(FlexCenter)`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: var(--primary-white);
`;

export const StyledCheckText = styled.p`
  color: var(--transparent-white);
  font-size: 14px;
  margin-bottom: 8px;
`;

export const StyledCheckNumber = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
