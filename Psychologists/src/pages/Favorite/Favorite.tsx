import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Teacher } from "../../types/types";
import { allTeachers } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { setAllTeachers } from "../../redux/actions";
import TeachersList from "../../components/TeachersList/TeachersList";
import { fetchData, getFav } from "../../redux/operations";
import {
  StyledBtn,
  StyledHomeWrapper,
  StyledImg,
  StyledImgWrapper,
  StyledTextWrapper,
  StyledTitle,
  StyledTitleSpan,
} from "../Home/Home.styled";
import sprite from "../../images/sprite.svg";
import favImg from "../../images/favorites.jpg";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState<Teacher[]>([]);
  const teachers: Teacher[] = useSelector(allTeachers);

  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
    getFav().then((data) =>
      setFavorites(teachers.filter((el) => data.includes(el.id)))
    );
  }, [dispatch, teachers]);

  return (
    <Container>
      {favorites.length ? (
        <TeachersList array={favorites} />
      ) : (
        <StyledHomeWrapper>
          <StyledTextWrapper>
            <StyledTitle>
              You haven't marked any{" "}
              <StyledTitleSpan>Psychologists</StyledTitleSpan> as favorite yet
            </StyledTitle>

            <StyledBtn onClick={() => navigate("/Psychologists/psychologists")}>
              View list
              <svg width={18} height={18}>
                <use href={`${sprite}#icon-arrow`} />
              </svg>
            </StyledBtn>
          </StyledTextWrapper>
          <StyledImgWrapper>
            <StyledImg src={favImg} alt="empty" width={500} />
          </StyledImgWrapper>
        </StyledHomeWrapper>
      )}
    </Container>
  );
};
export default Favorite;
