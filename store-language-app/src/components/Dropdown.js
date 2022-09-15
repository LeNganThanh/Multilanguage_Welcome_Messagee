import { useState } from "react";
import Welcome from "./Welcome";
import GreetingContext from "./GreetingContext";
import options from "./Options";

const Dropdown = () => {
  const [value, setValue] = useState("english");

  //greeting for Welcome component
  const greeting = options.map(opt => (opt.value === value ? opt.banner : ""));

  return (
    <GreetingContext.Provider value={greeting}>
      <div>
        <select onChange={e => setValue(e.target.value)}>
          {options.map((option, id) => (
            <option key={id} value={option.value}>
              {option.value}{" "}
            </option>
          ))}
        </select>
        <Welcome />
      </div>
    </GreetingContext.Provider>
  );
};
export default Dropdown;

/* Without using useContext - setting only for Dropdown

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        {options.map((option, id) => (
          <option key={id} value={option.value}>
            {option.value}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
*/

/* className="dropdown"
options={options}
value={value}

 */
