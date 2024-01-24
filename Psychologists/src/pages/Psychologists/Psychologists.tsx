import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allTeachers } from "../../redux/selectors";
import { setAllTeachers } from "../../redux/actions";
import { fetchData } from "../../redux/operations";
import { Teacher } from "../../types/types";

// import { database } from "../../firebaseConfig/firebaseConfig";
// import { get, ref } from "firebase/database";

const Psychologists = () => {
  const dispatch = useDispatch();
  const teachers: Teacher[] = useSelector(allTeachers);

  useEffect(() => {
    fetchData().then((res) => dispatch(setAllTeachers(res)));
  }, [dispatch]);
  console.log(teachers);

  return (
    <div>
      {teachers && teachers.map((el, index) => <p key={index}>{el.name}</p>)}
    </div>
  );
};

export default Psychologists;
