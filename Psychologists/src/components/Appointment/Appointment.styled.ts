import styled from "styled-components";
import { StyledLabel } from "../LogIn/Login.styled";
import TimePicker from "rc-time-picker";

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

export const CustomTimePicker = styled(TimePicker)`
  && {
    .rc-time-picker-input {
      display: block;
      width: 100%;
      padding: 16px 50px 16px 18px;
      height: 52px;
      box-sizing: border-box;
      border-radius: 12px;
      border: 1px solid var(--transparent-gray);
    }

    .rc-time-picker-panel-select {
      float: center;
      font-size: 16px;
      border: none;
      box-sizing: border-box;
      width: 56px;
      max-height: 144px;
      overflow-y: auto;
      position: relative;
    }

    .rc-time-picker-panel-select::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }

    .rc-time-picker-panel-select::-webkit-scrollbar-thumb {
      background-color: var(
        --primary-orange
      ); /* Color of the scrollbar thumb */
      border-radius: 4px; /* Radius of the scrollbar thumb */
    }

    .rc-time-picker-panel-select::-webkit-scrollbar-track {
      background-color: var(--primary-black); /* Color of the scrollbar track */
      border-radius: 4px; /* Radius of the scrollbar track */
    }
  }
`;
