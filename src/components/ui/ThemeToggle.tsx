
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set the theme based on stored preference or system preference
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 p-2 rounded-full transition-all duration-300",
        "hover:bg-muted flex items-center justify-center",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-all duration-300" />
      ) : (
        <Sun className="w-5 h-5 transition-all duration-300" />
      )}
    </button>
  );
}
