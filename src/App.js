import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0
};

const reducer = (state, action) => {
  switch (action.type){
    case 'muda':
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    case 'inverter':
      console.log('Chamou inverter');
      return { ...state, title: state.title.split('').reverse().join('') };
    default:
      console.log('Chamou default');
      return {...state};
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>{title} {counter}</h1>

      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'qualquer coisa' })}>Default</button>
    </div>
  );
}

export default App;
