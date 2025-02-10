import { GlobalContext } from "../../contexts/AppContext";
import { useContext } from "react";

export const H1 = ( ) => {
  const theContext = useContext(GlobalContext);
  const { contextState: {title, counter} } = theContext;
  return <h1>{title} {counter}</h1>
};