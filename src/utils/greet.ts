import { GreetFunc } from "../types";

const greet: GreetFunc = (str = "world") => {
  return `Hello ${str}! `;
}

export default greet;