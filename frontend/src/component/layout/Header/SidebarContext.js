import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const SidebarContext = createContext();

// Custom hook to use SidebarContext
export const useSidebar = () => {
  return useContext(SidebarContext);
};

// SidebarProvider component to wrap the application
export const SidebarProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("sidebarState") === "true" // Check if sidebar state is stored
  );

  // Update sidebar state in localStorage and component state
  const toggleSidebar = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    localStorage.setItem("sidebarState", newState); // Store new state in localStorage
  };

  useEffect(() => {
    // Ensure the sidebar state persists even after page reloads or navigation
    setIsChecked(localStorage.getItem("sidebarState") === "true");
  }, []);

  return (
    <SidebarContext.Provider value={{ isChecked, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
