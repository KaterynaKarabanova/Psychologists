import { ReviewListProps } from "../../types/types";
import { StyledRatingSvg } from "../TeachersCard/TeachersCard.styled";
import sprite from "../../images/sprite.svg";
import {
  StyledAvatar,
  StyledList,
  StyledReview,
  StyledReviewer,
  StyledWrapper,
} from "./ReviewList.styled";

const ReviewList = (props: ReviewListProps) => {
  const { reviews } = props;
  return (
    <StyledList>
      {reviews?.map((el, index) => (
        <li key={index}>
          <StyledWrapper>
            <StyledAvatar>
              <p>{el.reviewer.split("")[0]}</p>
            </StyledAvatar>
            <StyledReview>
              <StyledReviewer>{el.reviewer}</StyledReviewer>
              <div>
                {" "}
                <StyledRatingSvg width={16} height={16}>
                  <use href={`${sprite}#icon-star`} />
                </StyledRatingSvg>
                {el.rating}
              </div>
            </StyledReview>
          </StyledWrapper>
          <p>{el.comment}</p>
        </li>
      ))}
    </StyledList>
  );
};
export default ReviewList;
