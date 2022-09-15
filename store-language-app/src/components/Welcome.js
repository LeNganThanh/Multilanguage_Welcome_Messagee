import { useContext } from "react";
import GreetingContext from "./GreetingContext";
function Welcome() {
  const greetingText = useContext(GreetingContext);

  return (
    <div>
      <br />
      <h1 style={{ fontSize: "5rem" }}>{greetingText}</h1>
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
