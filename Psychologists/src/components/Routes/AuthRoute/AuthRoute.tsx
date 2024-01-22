import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {
  children: ReactNode;
}

const AuthRoute = (props: AuthRouteProps) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Authcheck();
  }, [auth]);
  const Authcheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigate("/");
    }
  });
  if (loading) {
    return <p>loading ...</p>;
  }
  return <div>{children}</div>;
};
export default AuthRoute;
