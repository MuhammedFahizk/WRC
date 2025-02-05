import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className=" p-2 w-16 h-8 flex cursor-pointer items-center bg-gray-800 dark:bg-white rounded-full relative"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
        <FaSun className="absolute left-2 text-yellow-500 dark:text-gray-400 z-50" />

{/* Moon Icon for Dark Mode */}
<FaMoon className="absolute right-2 text-gray-400 dark:text-yellow-300 z-50" />
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full absolute z-20"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ left: theme === "dark" ? "calc(100% - 1.75rem)" : "0.25rem" }}
      />
    </motion.button>
  );
};

export default Toggle;
