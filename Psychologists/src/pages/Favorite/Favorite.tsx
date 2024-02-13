import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { RootState, Teacher } from "../../types/types";
import { allTeachers, filteredFavoriteTeachers } from "../../redux/selectors";
import { useEffect, useMemo } from "react";
import { setAllTeachers, setFav } from "../../redux/actions";
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
import Filters from "../../components/Filters/Filters";

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const teachers: Teacher[] = useSelector(allTeachers);

  const favoriteTeachers: Teacher[] = useSelector((state: RootState) =>
    filteredFavoriteTeachers(state)
  );

  const memoizedFavoriteTeachers = useMemo(
    () => favoriteTeachers,
    [favoriteTeachers]
  );
  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
  }, [dispatch]);

  useEffect(() => {
    getFav().then((data) =>
      dispatch(setFav(teachers.filter((el) => data.includes(el.id))))
    );
  }, [dispatch, teachers]);

  return (
    <Container>
      {favoriteTeachers.length ? (
        <>
          <Filters />
          <TeachersList array={memoizedFavoriteTeachers} />
        </>
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
