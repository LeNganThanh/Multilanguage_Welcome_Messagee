import React, { useState } from "react";
import GreetingContext from "./GreetingContext";

function LanguageProvider({ children }) {
  const [value, setValue] = useState("english");
  return (
    <GreetingContext.Provider value={[value, setValue]}>
      {children}
    </GreetingContext.Provider>
  );
}
export default LanguageProvider;
