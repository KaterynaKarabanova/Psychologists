import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allTeachers } from "../../redux/selectors";
import { setAllTeachers } from "../../redux/actions";
import { fetchData } from "../../redux/operations";
import { Teacher } from "../../types/types";
import { Container } from "../../styles/GlobalStyles";
import TeachersList from "../../components/TeachersList/TeachersList";

// import { database } from "../../firebaseConfig/firebaseConfig";
// import { get, ref } from "firebase/database";

const Psychologists = () => {
  const dispatch = useDispatch();
  const teachers: Teacher[] = useSelector(allTeachers);

  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
  }, [dispatch]);

  return (
    <Container>
      <TeachersList array={teachers} />
    </Container>
  );
};

export default Psychologists;
