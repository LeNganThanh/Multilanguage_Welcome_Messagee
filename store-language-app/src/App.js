import React from "react";
import "./App.css";
import Header from "./components/Header";
//import GreetingContext from "./components/GreetingContext";
import LanguageProvider from "./components/LanguageContext";
import Welcome from "./components/Welcome";

function App() {
  //by using LanguageProvide - don't need - const [value, setValue] = useState("english");

  return (
    <LanguageProvider>
      <div className="App">
        <h1 className="header">Language Chooser</h1>
        <Header />
        <Welcome />
      </div>
    </LanguageProvider>
  );
}
export default App;

/* without useContext - we have to 
1. import data from options
2. import Welcome component
2. set the props for Welcome

import options from "./components/data";
import Welcome from "./components/Welcome";

function App() {
  const [value, setValue] = useState("english");

  return (
    <div className="App">
      <h1 className="header">Language Chooser</h1>
      <label>Please select your language</label>
      <Dropdown
        className="dropdown"
        options={options}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Welcome options={options} value={value} />
    </div>
  );
}
*/
