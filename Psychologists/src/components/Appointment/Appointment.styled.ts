import styled from "styled-components";
import { StyledLabel } from "../LogIn/Login.styled";

export const StyledImgWrapper = styled.div`
  display: flex;
  gap: 14px;
  font-size: 14px;
  margin: 44px 0;
`;

export const StyledImg = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 15px;
`;

export const StyledName = styled.p`
  color: var(--primary-black);
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

export const StyledTimeWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const StyledPhone = styled(StyledLabel)`
  width: 48%;
`;

export const StyledComment = styled.textarea`
  font-family: inherit;
  display: block;
  width: 100%;
  padding: 16px 50px 16px 18px;
  height: 116px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--transparent-gray);
  resize: none;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: var(--primary-orange);
  position: absolute;
  bottom: -15px;
`;
