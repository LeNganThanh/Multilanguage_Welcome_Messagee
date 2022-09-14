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
