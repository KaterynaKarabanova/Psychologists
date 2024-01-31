import { database } from "../firebaseConfig/firebaseConfig";
import { get, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
const auth = getAuth();

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

export const getFav = async () => {
  const userId = auth.currentUser?.uid;

  try {
    if (!userId) return null; // Return null if user is not logged in
    const snapshot = await get(ref(database, `/users/${userId}`)); // Get the favorites for the current user
    return snapshot.val()?.favorites || []; // Return the favorites array, or an empty array if it doesn't exist
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

export const toggleFavoriteToUser = async (cardId: number) => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    console.error("User not logged in");
    return;
  }

  try {
    const userRef = ref(database, `/users/${userId}`);
    const fav = await getFav();
    const updatedFavorites = fav.includes(cardId)
      ? fav.filter((el: number) => el !== cardId)
      : [...(fav || []), cardId];

    await update(userRef, {
      favorites: updatedFavorites,
    });
    return true;
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
};
