import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allTeachers, showedTeachers } from "../../redux/selectors";
import { setAllTeachers } from "../../redux/actions";
import { fetchData } from "../../redux/operations";
import { Teacher } from "../../types/types";
import { Container } from "../../styles/GlobalStyles";
import TeachersList from "../../components/TeachersList/TeachersList";
import LoadMore from "../../components/LoadMore/LoadMore";

const Psychologists = () => {
  const dispatch = useDispatch();
  const teachers: Teacher[] = useSelector(showedTeachers);
  const allTeachersArr: Teacher[] = useSelector(allTeachers);

  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
  }, [dispatch]);

  return (
    <Container>
      <TeachersList array={teachers} />
      {!(allTeachersArr.length - teachers.length <= 0) && <LoadMore />}
    </Container>
  );
};

export default Psychologists;
