import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";

// import { appReducer, productFilterReducer, userReducer } from "./Reducers";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [salesTimerOn, setSalesTimerOn] = useState(true);
  const [isHomeSearchOpen, setIsHomeSearchOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        salesTimerOn,
        setSalesTimerOn,
        isHomeSearchOpen,
        setIsHomeSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
