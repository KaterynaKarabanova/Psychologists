import styled from "styled-components";
import { FlexCenter } from "../../styles/GlobalStyles";
import { StyledOrangeBtn } from "../Layout/Layout.styled";
import { StyledFavSvgProps } from "../../types/types";

export const StyledCard = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
  color: var(--text-gray);
  position: relative;
`;

export const StyledImgWrapper = styled(FlexCenter)`
  position: relative;
  min-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
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
  border-radius: 24px;
  font-weight: 500;
`;

export const StyledSpan = styled.span`
  color: var(--primary-black);
`;

export const StyledRating = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 24px;
  right: 0;
  top: 0;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
`;

export const StyledRatingSvg = styled.svg`
  margin-right: 8px;
`;

export const StyledRatingText = styled.p`
  padding-right: 16px;
  margin-right: 16px;
  border-right: 2px solid var(--border-gray);
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

export const StyledFavSvg = styled.svg<StyledFavSvgProps>`
  fill: ${(props) => (props.isFav ? "var(--primary-orange)" : "transparent")};
  stroke: ${(props) => (props.isFav ? "var(--primary-orange)" : "black")};
`;
