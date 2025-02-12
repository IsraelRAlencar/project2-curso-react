import { createContext, useContext, useState } from "react";

const s = {
  style: {
    fontSize: '60px'
  }
}

const TurnOnOffContext = createContext(); 

const TurnOnOff = ({children}) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return <TurnOnOffContext.Provider value={{isOn, onTurn}}>{children}</TurnOnOffContext.Provider>;
};

const P = ({children}) => <p {...s}>{children}</p>;

const TurnedOn = ({ children }) => {
  const {isOn} = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const {isOn} = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props}) => {
  const {isOn, onTurn} = useContext(TurnOnOffContext);

  return <button onClick={onTurn} {...props}>Turn {isOn ? 'OFF' : 'ON'}</button>;
}

export const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <p>Oi</p>
        <TurnedOn><P>Coisas do ON</P></TurnedOn>
        <TurnedOff><P>Coisas do OFF</P></TurnedOff>
        <TurnButton {...s}/>
      </div>
    </TurnOnOff>
  );
};