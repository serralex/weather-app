import React, { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useGlobalState } from "./state";
import { IGlobal } from "../../interfaces/context";

interface GlobalContextProviderProps {
  children: ReactNode;
}

// Context
const GlobalContext = createContext<IGlobal>({} as IGlobal);

// Provider
const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const state = useGlobalState();

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

// Export
export { GlobalContextProvider, useGlobalContext };
