import styled from "styled-components";
import { FlexCenter } from "../../styles/GlobalStyles";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 48px 0 40px 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const StyledAvatar = styled(FlexCenter)`
  background-color: var(--hover-orange);
  color: var(--primary-orange);
  width: 44px;
  height: 44px;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
`;

export const StyledReviewer = styled.p`
  font-size: 16px;
`;
