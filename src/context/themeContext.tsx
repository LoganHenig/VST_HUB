import { createContext, useEffect, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom Hook to access Theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Function to dynamically load the correct CSS file
const setThemeCSS = (isDark: boolean) => {
  const themeId = "prime-theme"; // ID to manage our <link> tag
  let themeLink = document.getElementById(themeId) as HTMLLinkElement;

  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.id = themeId;
    themeLink.rel = "stylesheet";
    document.head.appendChild(themeLink);
  }

  // Change href dynamically
  themeLink.href = isDark
    ? "src/assets/lightDarkThemeClasses/vstRealmDarkMode.css"
    : "src/assets/lightDarkThemeClasses/vstRealmLightMode.css";
};

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  // Load correct theme on initial render
  useEffect(() => {
    setThemeCSS(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme")
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};