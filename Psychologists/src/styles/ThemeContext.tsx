import React, { useState, useContext, createContext, ReactNode } from "react";
import { GlobalStyles } from "./GlobalStyles";

interface Theme {
  currentColor: string;
  setColor: (color: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("rgba(252, 131, 44, 1)");
  const setColor = (newColor: string) => {
    setCurrentColor(newColor);
  };

  const value: Theme = { currentColor, setColor };

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles color={currentColor} />
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useContext should be used within ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme, ThemeContext };
