import { Children, cloneElement, useState } from "react";

const s = {
  style: {
    fontSize: '60px'
  }
}

const TurnOnOff = ({children}) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn
    });

    return newChild;
  });
};

const P = ({children}) => <p {...s}>{children}</p>;

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);
const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({isOn, onTurn, ...props}) => {
  return <button onClick={onTurn} {...props}>Turn {isOn ? 'OFF' : 'ON'}</button>;
}

export const Home = () => {
  return (
    <TurnOnOff>
      <TurnedOn><P>Coisas do ON</P></TurnedOn>
      <TurnedOff><P>Coisas do OFF</P></TurnedOff>
      <TurnButton {...s}/>
    </TurnOnOff>
  );
};