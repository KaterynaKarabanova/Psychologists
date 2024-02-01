import { useEffect, useState } from "react";
import { ref, query, limitToFirst, get } from "firebase/database";
import { database } from "../../firebaseConfig/firebaseConfig";
import { useDispatch } from "react-redux";
import { setShowedTeachers } from "../../redux/actions";
import { StyledLoadBtn, StyledWrapper } from "./LoadMore.styled";

const LoadMore = () => {
  const dispatch = useDispatch();
  const [lastKey, setLastKey] = useState<number>(3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const queryRef = query(ref(database, "/teachers"), limitToFirst(lastKey));
      const snapshot = await get(queryRef);
      const data = snapshot.val();
      setLastKey(lastKey + 3);
      dispatch(setShowedTeachers(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const handleNextPage = async () => {
    await fetchData();
  };

  return (
    <StyledWrapper>
      <StyledLoadBtn onClick={handleNextPage}>Load More</StyledLoadBtn>
    </StyledWrapper>
  );
};

export default LoadMore;
