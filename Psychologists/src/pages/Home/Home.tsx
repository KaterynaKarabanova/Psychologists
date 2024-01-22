import { getAuth, signOut } from "firebase/auth";
import GoogleAuth from "../../components/Registration/GoogleSignUp";
import Registration from "../../components/Registration/Registration";

const Home = () => {
  const auth = getAuth();
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}>Sign Out</button>
      <Registration />
      <GoogleAuth />
    </div>
  );
};
export default Home;
