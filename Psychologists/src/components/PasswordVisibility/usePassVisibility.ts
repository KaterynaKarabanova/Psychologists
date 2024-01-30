import { useState } from "react";

export const usePassVisibility = () => {
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility((prev) => !prev);
  };
  return {
    visibility,
    toggleVisibility,
  };
};
