import { useContext } from "react";
import GreetingContext from "./GreetingContext";
import options from "./Data";

const Dropdown = () => {
  const [value, setValue] = useContext(GreetingContext);

  return (
    <div>
      <select value={value} onChange={e => setValue(e.target.value)}>
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
