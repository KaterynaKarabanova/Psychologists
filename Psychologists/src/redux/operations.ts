import { database } from "../firebaseConfig/firebaseConfig";
import { get, ref } from "firebase/database";
export const fetchData = async () => {
  try {
    const snapshot = await get(ref(database, "/teachers"));
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
