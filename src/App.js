import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';
import P from 'prop-types';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE'
};

// Data.js
export const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0
};

// Reducer.js
export const reducer = (state, action) => {
  switch (action.type){
    case actions.CHANGE_TITLE:
      console.log('Mudar título');
      return {...state, title: action.payload};
    default:
      console.log('default');
      return {...state};
  }

};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>
};

AppContext.propTypes = {
  children: P.node
};

export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef}/>
    </>
  );
};

//App.jsx 
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
