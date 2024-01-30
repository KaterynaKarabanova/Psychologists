import Layout from "./components/Layout/Layout";
import Routers from "./components/Routes/Routes";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig/firebaseConfig.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions.ts";
initializeApp(firebaseConfig);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);
  return (
    <>
      <Layout />
      <Routers />
    </>
  );
}

export default App;
