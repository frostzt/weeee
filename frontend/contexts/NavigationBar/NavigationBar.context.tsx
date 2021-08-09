import React, { useState, createContext } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

// Pages Enum
export enum Pages {
  Dashboard = 'dashboard',
  Me = 'me',
}

const NavigationBarContext = createContext({
  current: Pages.Dashboard,
  changePage: (to: Pages) => {},
});

export const NavigationBarContextProvider = ({ children }: ContextProps) => {
  const [current, setCurrent] = useState(Pages.Dashboard);

  const changePage = (to: Pages) => {
    setCurrent(to);
  };

  return <NavigationBarContext.Provider value={{ current, changePage }}>{children}</NavigationBarContext.Provider>;
};

export default NavigationBarContext;
