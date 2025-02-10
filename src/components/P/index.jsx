import { GlobalContext } from "../../contexts/AppContext";
import { useContext } from "react";

export const P = ( ) => {
  const theContext = useContext(GlobalContext);
  const {contextState: {body}, setState} = theContext;
  return <p onClick={() => setState((s) => ({...s, counter: s.counter + 1}))} >{body}</p>
};