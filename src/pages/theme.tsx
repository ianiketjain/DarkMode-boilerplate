import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  themeColors : object
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // You can add the color from here too and pass in value props
  const themeColors = {
    light: {
      background: '#ffffff',
      text: '#000000',
      // Add more colors if needed
      buttonColor : "bg-indigo-300",
    },
    dark: {
      background: '#121212',
      text: '#ffffff',
      // Add more colors if needed
      buttonColor : "bg-indigo-900"
    },
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme , themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};