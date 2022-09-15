import React, { useState, createContext } from "react";
// create GreetingContext without a component
//import GreetingContext from "./GreetingContext";

export const GreetingContext = createContext(null);

function LanguageProvider({ children }) {
  const [value, setValue] = useState("english");
  return (
    <GreetingContext.Provider value={[value, setValue]}>
      {children}
    </GreetingContext.Provider>
  );
}
export default LanguageProvider;
