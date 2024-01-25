import { getAuth, signOut } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  return (
    <div>
      Login
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};
export default Login;
