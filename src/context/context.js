import React, { useContext, useEffect, useState } from 'react';

const AgencyContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AgencyContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </AgencyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AgencyContext);
};
