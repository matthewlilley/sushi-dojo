import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  return (
    <button
      onClick={() => {
        console.log("onClick");
        if (theme === "light") {
          setTheme("dark");
          document.documentElement.style.setProperty(
            "--background",
            "var(--background-dark)"
          );
          document.documentElement.style.setProperty(
            "--color",
            "var(--color-dark)"
          );
        } else if (theme === "dark") {
          setTheme("light");
          document.documentElement.style.setProperty(
            "--background",
            "var(--background-light)"
          );
          document.documentElement.style.setProperty(
            "--color",
            "var(--color-light)"
          );
        }
      }}
    >
      Switch Theme
    </button>
  );
};

export default ThemeToggle;
