import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Psychologists from "../../pages/Psychologists/Psychologists";
import Favorite from "../../pages/Favorite/Favorite";
import AuthRoute from "./AuthRoute/AuthRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/Psychologists/" element={<Home />}>
        Home
      </Route>
      <Route path="/Psychologists/psychologists" element={<Psychologists />}>
        Psychologists
      </Route>
      <Route
        path="/Psychologists/favorite"
        element={
          <AuthRoute>
            <Favorite />
          </AuthRoute>
        }
      >
        Favorite
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default Routers;
