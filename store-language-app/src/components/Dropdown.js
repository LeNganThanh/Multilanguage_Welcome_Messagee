import Welcome from "./Welcome";
import GreetingContext from "./GreetingContext";

const Dropdown = ({ value, options, onChange }) => {
  const greeting = options.map(opt => (opt.value === value ? opt.banner : ""));
  return (
    <GreetingContext.Provider value={greeting}>
      <div>
        <select value={value} onChange={onChange}>
          {options.map(option => (
            <option value={option.value}>{option.value} </option>
          ))}
        </select>
        {/* without using useContext can call greeting directly here
     <p>{greeting}</p> */}
        <Welcome />
      </div>
    </GreetingContext.Provider>
  );
};
export default Dropdown;
