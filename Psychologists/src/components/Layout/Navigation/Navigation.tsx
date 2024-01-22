import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to={"/Psychologists/"}>Home</NavLink>
      <NavLink to={"/Psychologists/psychologists"}>Psychologists</NavLink>
      <NavLink to={"/Psychologists/favorite"}>Favorite</NavLink>
    </div>
  );
};
export default Navigation;
