import { useEffect, useState } from "react";
import { TeachersCardProps } from "../../types/types";
import ReviewList from "../ReviewList/ReviewList";
import sprite from "../../images/sprite.svg";
import {
  StyledAppointmentBtn,
  StyledCard,
  StyledFavSvg,
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
import { toggleFavoriteToUser, getFav } from "../../redux/operations";
import Modal from "../Modal/Modal";
import Appointment from "../Appointment/Appointment";
import { ToastContainer, toast } from "react-toastify";

const TeachersCard = (props: TeachersCardProps) => {
  const { el } = props;
  const [showBtn, setShowBtn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFav().then((data) => setIsFavorite(data.includes(el.id)));
  }, [el.id]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const toggleBtn = () => {
    setShowBtn((prev) => !prev);
  };

  const handleToggleFavorite = async () => {
    try {
      const success = await toggleFavoriteToUser(el.id);
      if (success !== undefined) {
        setIsFavorite((prev) => !prev); // Update isFavorite state immediately after toggling favorite status
      }
    } catch (error) {
      toast.info(
        "Authorize first! Only authorized users could mark cards as favourite"
      );
      console.error("Error toggling favorite:", error);
      // Handle error
    }
  };

  return (
    <StyledCard>
      <ToastContainer />
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
            <StyledAppointmentBtn onClick={toggleModal}>
              Make an appointment
            </StyledAppointmentBtn>
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
        <StyledHeartBtn onClick={() => handleToggleFavorite()}>
          <StyledFavSvg width={26} height={26} isFav={isFavorite}>
            <use href={`${sprite}#icon-heart-2`} />
          </StyledFavSvg>
        </StyledHeartBtn>
      </StyledRating>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <Appointment id={el.id} name={el.name} avatar={el.avatar_url} />
        </Modal>
      )}
    </StyledCard>
  );
};
export default TeachersCard;
