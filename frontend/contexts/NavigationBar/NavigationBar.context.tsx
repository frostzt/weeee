import React, { useState, createContext } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

// Pages Enum
export enum AvailablePages {
  Dashboard = 'dashboard',
  Me = 'me',
}

const NavigationBarContext = createContext({
  current: AvailablePages.Dashboard,
  changePage: (to: AvailablePages) => {
    return;
  },
});

export const NavigationBarContextProvider = ({ children }: ContextProps) => {
  const [current, setCurrent] = useState(AvailablePages.Dashboard);

  const changePage = (to: AvailablePages) => {
    setCurrent(to);
  };

  return <NavigationBarContext.Provider value={{ current, changePage }}>{children}</NavigationBarContext.Provider>;
};

export default NavigationBarContext;
