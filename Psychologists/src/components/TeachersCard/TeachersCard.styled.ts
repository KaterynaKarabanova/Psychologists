import styled from "styled-components";
import { FlexCenter } from "../../styles/GlobalStyles";
import { StyledOrangeBtn } from "../Layout/Header/Header.styled";

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 10px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
  color: var(--text-gray);
  position: relative;
  @media (min-width: 768px) {
    padding: 24px;
    flex-direction: row;
    gap: 24px;
  }
`;

export const StyledImgWrapper = styled(FlexCenter)`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
  @media (min-width: 768px) {
    min-width: 120px;
    width: auto;
  }
  @media (min-width: 1440px) {
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  min-width: 96px;
  height: 96px;
  border-radius: 15px;
`;
export const StyledSvg = styled.svg`
  position: absolute;
  top: 10px;
  right: 0;
`;

export const StyledProf = styled.p`
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
`;

export const StyledName = styled(StyledProf)`
  color: var(--primary-black);
  font-size: 24px;
  margin-bottom: 24px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 4px;
  margin-bottom: 24px;
`;

export const StyledItem = styled.li`
  padding: 8px 16px;
  background-color: var(--light-gray);
  font-size: 14px;
  border-radius: 24px;
  font-weight: 500;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const StyledSpan = styled.span`
  color: var(--primary-black);
`;

export const StyledRating = styled.div`
  width: 140px;
  gap: 5px;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  align-items: right;
  padding: 15px;
  right: -30px;
  top: 0;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
  @media (min-width: 768px) {
    width: auto;
    flex-direction: row;
    padding: 24px;
    align-items: center;
    right: 0;
    gap: 0;
  }
`;

export const StyledRatingSvg = styled.svg`
  margin-right: 8px;
`;

export const StyledRatingText = styled.p`
  padding-right: 16px;
  margin-right: 16px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    border-right: 2px solid var(--border-gray);
  }
`;

export const StyledPrice = styled.span`
  color: var(--light-green);
`;

export const StyledHeartBtn = styled.button`
  background: transparent;
  margin-left: 28px;
`;

export const StyledReadMore = styled.button`
  background: transparent;
  text-decoration: underline;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
  font-family: inherit;
  padding: 0;
  transition: all var(--transition);
  &:hover {
    color: var(--primary-orange);
  }
`;

export const StyledAppointmentBtn = styled(StyledOrangeBtn)`
  padding: 14px 32px;
`;
