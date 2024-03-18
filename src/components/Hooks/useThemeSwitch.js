"use client";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
  // Media query for dark color scheme preference
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  // Key for storing theme preference in local storage
  const storageKey = "theme";

  // Function to toggle theme and store preference
  const toggleTheme = (theme) => {
    // Add or remove "dark" class from documentElement to toggle theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Store theme preference in local storage
    window.localStorage.setItem(storageKey, theme);
  };

  // Function to get user's theme preference
  const getUserPreference = () => {
    // Check if preference is stored in local storage
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref !== null) {
      return userPref;
    }
    return "light";
  };

  // State management for current theme mode
  const [mode, setMode] = useState("dark");

  // Effect for initial setup
  useEffect(() => {
    // Function to handle changes in color scheme preference
    const handleChange = () => {
      // Check user's system preference
      const mediaQuery = window.matchMedia(preferDarkQuery).matches;
      if (mediaQuery !== null) {
        const systemTheme = mediaQuery ? "dark" : "light";
        // Store the system theme preference in local storage
        window.localStorage.setItem(storageKey, systemTheme);
        // Update mode state
        setMode(systemTheme);
        // Toggle theme based on new mode
        toggleTheme(systemTheme);
      } else {
        const newMode = getUserPreference();
        // Update mode state
        setMode(newMode);
        // Toggle theme based on new mode
        toggleTheme(newMode);
      }
    };

    // Call handleChange to initialize theme based on user preference
    handleChange();
  }, []); // Empty dependency array ensures this effect runs only once

  // Effect for updating theme when mode changes
  useEffect(() => {
    toggleTheme(mode);
  }, [mode]); // Run effect when mode changes

  // Return current mode and function to update mode
  return [mode, setMode];
}
