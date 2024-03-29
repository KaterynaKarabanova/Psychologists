import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  allTeachers,
  filteredTeachers,
  showLoadMore,
} from "../../redux/selectors";
import { setAllTeachers } from "../../redux/actions";
import { fetchData } from "../../redux/operations";
import { Teacher } from "../../types/types";
import { Container } from "../../styles/GlobalStyles";
import TeachersList from "../../components/TeachersList/TeachersList";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filters from "../../components/Filters/Filters";
import { StyledMainWrapper } from "./Psychologists.styled";

const Psychologists = () => {
  const dispatch = useDispatch();
  const teachers: Teacher[] = useSelector(filteredTeachers);
  const allTeachersArr: Teacher[] = useSelector(allTeachers);
  const loadMore = useSelector(showLoadMore);
  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
  }, [dispatch]);

  return (
    <Container>
      <StyledMainWrapper>
        <Filters />
        <TeachersList array={teachers} />
        {loadMore && !(allTeachersArr.length - teachers.length <= 0) && (
          <LoadMore />
        )}
      </StyledMainWrapper>
    </Container>
  );
};

export default Psychologists;
