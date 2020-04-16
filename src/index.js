import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

/* const App = () => (
  <div>
  <p>Hello world</p>
  </div>
) */

const Hello = (props) => {
  const now = new Date()
  return (
    <div>
      <p>Hello {props.name}, You are {props.age} years old, it is {now.toString()}</p>
    </div>
  )
}

const App = () => {
  // const now = new Date()
  const a = 10
  const b = 20
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello  name="Jerome" />
      <Hello name={name} age={age} />
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
