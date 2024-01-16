/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const ThemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, { theme: "light" });

  const changeTheme = (value) => {
    dispatch({ type: "CHANGE_THEME", payload: value });
  };

  const isDark = state.theme === "dark";

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemContextProvider, ThemeContext };
