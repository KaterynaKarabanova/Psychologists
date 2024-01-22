import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const signInWithGoogle = () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div>
      <button onClick={signInWithGoogle} disabled={authing}>
        SignUp with Google
      </button>
    </div>
  );
};
export default GoogleAuth;
