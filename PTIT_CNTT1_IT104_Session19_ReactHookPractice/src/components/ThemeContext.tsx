import { createContext, useState } from "react";
import ThemeApp from "./ThemeApp";

type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};

// Tạo theme ConText
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeContextProvider() {
  const [theme, setTheme] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeApp />
    </ThemeContext.Provider>
  );
}
