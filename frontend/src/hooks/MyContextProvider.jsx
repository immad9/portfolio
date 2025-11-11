import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(localStorage.getItem("selectedTab") || "");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);


  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <MyContext.Provider value={{ selectedTab, setSelectedTab, theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

