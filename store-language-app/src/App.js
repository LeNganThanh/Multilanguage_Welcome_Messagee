import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <h1 className="header">Language Chooser</h1>
      <label>Please select your language</label>
      <Dropdown />
    </div>
  );
}

export default App;

/* without useContext - we have to 
1. import data from options
2. import Welcome component
2. set the props for Welcome

import options from "./components/Options";
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
