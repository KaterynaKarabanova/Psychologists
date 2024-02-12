import styled from "styled-components";
import { FlexCenter } from "../../../styles/GlobalStyles";
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 38px 0;
  border-bottom: 1px solid var(--transparent-gray);
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    flex-direction: row;

    justify-content: space-between;
    gap: 0;
  }
`;

export const StyledOrangeBtn = styled.button`
  font-family: inherit;
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background-color: var(--primary-orange);
  color: var(--primary-white);
  font-weight: 500;
  transition: all var(--transition);
  &:hover {
    background-color: var(--hover-orange);
  }
`;

export const StyledTranspBtn = styled.button`
  font-family: inherit;
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: transparent;
  border: 1px solid var(--border-gray);
  color: var(--primary-black);
  font-weight: 500;
  transition: all var(--transition);
  &:hover {
    background: var(--hover-orange);
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 500;
`;

export const StyledAvatarDiv = styled(FlexCenter)`
  background-color: var(--primary-orange);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 6px;
`;

export const StyledUserName = styled.p`
  margin-right: 20px;
`;
