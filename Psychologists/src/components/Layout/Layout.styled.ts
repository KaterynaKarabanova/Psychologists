import styled from "styled-components";
import { FlexCenter } from "../../styles/GlobalStyles";
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 0;
  border-bottom: 1px solid var(--transparent-gray);
`;

export const StyledLogo = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-orange);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export const StyledLogoSpan = styled.span`
  color: var(--primary-black);
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
