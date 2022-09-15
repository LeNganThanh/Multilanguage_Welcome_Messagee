import { useContext } from "react";
import GreetingContext from "./GreetingContext";
import options from "./Data";

function Welcome() {
  const [value] = useContext(GreetingContext);

  //greeting for Welcome component
  const greeting = options.map(opt => (opt.value === value ? opt.banner : ""));

  return (
    <div>
      <br />
      <h1 style={{ fontSize: "5rem" }}>{greeting}</h1>
    </div>
  );
}
export default Welcome;

/* Without useContext - get props from App.js 

function Welcome({ options, value }) {

  let greeting = "";
  options.forEach(opt => {
    if (opt.value === value) greeting = opt.banner;
  });
  return (
    <div>
      <br />
      <h1 style={{ fontSize: "5rem" }}>{greeting}</h1>
    </div>
  );
}
*/
