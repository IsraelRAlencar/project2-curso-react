import './App.css';
import React, { useContext } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

const Div = () => {
  return (
    <>
      <H1></H1>
      <P></P>
    </>
  );
};

const H1 = ( ) => {
  const theContext = useContext(GlobalContext);
  const { contextState: {title, counter} } = theContext;
  return <h1>{title} {counter}</h1>
};

const P = ( ) => {
  const theContext = useContext(GlobalContext);
  const {contextState: {body}, setContextState} = theContext;
  return <p onClick={() => setContextState((s) => ({...s, counter: s.counter + 1}))} >{body}</p>
};

function App() {
  const [contextState, setContextState] = React.useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState, setContextState}}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
