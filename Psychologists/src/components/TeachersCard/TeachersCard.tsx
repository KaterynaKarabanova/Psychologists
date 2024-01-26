import { useState } from "react";
import { TeachersCardProps } from "../../types/types";
import ReviewList from "../ReviewList/ReviewList";
import sprite from "../../images/sprite.svg";
import {
  StyledAppointmentBtn,
  StyledCard,
  StyledHeartBtn,
  StyledImg,
  StyledImgWrapper,
  StyledItem,
  StyledList,
  StyledName,
  StyledPrice,
  StyledProf,
  StyledRating,
  StyledRatingSvg,
  StyledRatingText,
  StyledReadMore,
  StyledSpan,
  StyledSvg,
} from "./TeachersCard.styled";
const TeachersCard = (props: TeachersCardProps) => {
  const [showBtn, setShowBtn] = useState(true);

  const toggleBtn = () => {
    setShowBtn((prev) => !prev);
  };
  const { el } = props;
  return (
    <StyledCard>
      <StyledImgWrapper>
        <StyledImg src={el.avatar_url} alt="" />
        <StyledSvg width={24} height={24}>
          <use href={`${sprite}#icon-circle`} />
        </StyledSvg>
      </StyledImgWrapper>
      <div>
        <StyledProf>Psychologist</StyledProf>
        <StyledName>{el.name}</StyledName>
        <StyledList>
          <StyledItem>
            Experience: <StyledSpan>{el.experience}</StyledSpan>
          </StyledItem>
          <StyledItem>
            License: <StyledSpan>{el.license}</StyledSpan>
          </StyledItem>
          <StyledItem>
            Specialization: <StyledSpan>{el.specialization}</StyledSpan>
          </StyledItem>
          <StyledItem>
            Initial_consultation:{" "}
            <StyledSpan>{el.initial_consultation}</StyledSpan>
          </StyledItem>
        </StyledList>
        <p>{el.about}</p>
        {showBtn ? (
          <StyledReadMore onClick={toggleBtn}>Read more</StyledReadMore>
        ) : (
          <div>
            <ReviewList reviews={el.reviews} />
            <StyledAppointmentBtn>Make an appointment</StyledAppointmentBtn>
          </div>
        )}
      </div>
      <StyledRating>
        <StyledRatingSvg width={16} height={16}>
          <use href={`${sprite}#icon-star`} />
        </StyledRatingSvg>
        <StyledRatingText>Rating: {el.rating}</StyledRatingText>
        <p>
          Price / 1 hour: <StyledPrice>{el.price_per_hour}$</StyledPrice>
        </p>
        <StyledHeartBtn>
          <svg width={26} height={26}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </StyledHeartBtn>
      </StyledRating>
    </StyledCard>
  );
};
export default TeachersCard;
