import { useEffect, useState } from "react";
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
import { toggleFavoriteToUser, getFav } from "../../redux/operations";
import Modal from "../Modal/Modal";
import Appointment from "../Appointment/Appointment";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { allTeachers } from "../../redux/selectors";
import { setFav } from "../../redux/actions";

const TeachersCard = (props: TeachersCardProps) => {
  const dispatch = useDispatch();
  const all = useSelector(allTeachers);

  const {
    id,
    avatar_url,
    name,
    experience,
    license,
    specialization,
    initial_consultation,
    reviews,
    rating,
    price_per_hour,
    about,
  } = props.el;

  const [showBtn, setShowBtn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFav().then((data) => setIsFavorite(data.includes(id)));
  }, [id]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const toggleBtn = () => {
    setShowBtn((prev) => !prev);
  };

  const handleToggleFavorite = async () => {
    try {
      const fav = await getFav();
      const updatedFavorites = fav.includes(id)
        ? fav.filter((el: number) => el !== id)
        : [...(fav || []), id];
      dispatch(setFav(all.filter((el) => updatedFavorites.includes(el.id))));
      const success = await toggleFavoriteToUser(updatedFavorites);
      if (success !== undefined) {
        setIsFavorite((prev) => !prev);
      }
    } catch (error) {
      toast.info(
        "Authorize first! Only authorized users could mark cards as favourite"
      );
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <StyledCard>
      <ToastContainer />
      <StyledImgWrapper>
        <StyledImg src={avatar_url} alt="" />
        <StyledSvg width={24} height={24}>
          <use href={`${sprite}#icon-circle`} />
        </StyledSvg>
      </StyledImgWrapper>
      <div>
        <StyledProf>Psychologist</StyledProf>
        <StyledName>{name}</StyledName>
        <StyledList>
          <StyledItem>
            Experience: <StyledSpan>{experience}</StyledSpan>
          </StyledItem>
          <StyledItem>
            License: <StyledSpan>{license}</StyledSpan>
          </StyledItem>
          <StyledItem>
            Specialization: <StyledSpan>{specialization}</StyledSpan>
          </StyledItem>
          <StyledItem>
            Initial_consultation:{" "}
            <StyledSpan>{initial_consultation}</StyledSpan>
          </StyledItem>
        </StyledList>
        <p>{about}</p>
        {showBtn ? (
          <StyledReadMore onClick={toggleBtn}>Read more</StyledReadMore>
        ) : (
          <div>
            <ReviewList reviews={reviews} />
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
        <StyledRatingText>Rating: {rating}</StyledRatingText>
        <p>
          Price / 1 hour: <StyledPrice>{price_per_hour}$</StyledPrice>
        </p>
        <StyledHeartBtn onClick={() => handleToggleFavorite()}>
          <svg
            width={26}
            height={26}
            fill={isFavorite ? "var(--primary-orange)" : "transparent"}
            stroke={isFavorite ? "var(--primary-orange)" : "black"}
          >
            <use href={`${sprite}#icon-heart-2`} />
          </svg>
        </StyledHeartBtn>
      </StyledRating>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <Appointment
            id={id}
            name={name}
            avatar={avatar_url}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </StyledCard>
  );
};
export default TeachersCard;
