import React,{useState} from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import options from "./components/Options";

function App() {
  const [value, setValue] = useState("english")

  function handleChange(e){
      setValue(e.target.value)
  }
 
  return (
      <div className="App">
          <h1 className="header">Language Chooser</h1>
          <label>Please select your language</label>
              <Dropdown
              className="dropdown"
              options={options}
              value = {value}
              onChange = {handleChange}
              />
      </div>
  );
}

export default App;
