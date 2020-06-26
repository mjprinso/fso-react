import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { useState } from 'react';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Display = ({ counter }) => <div> <b>Counter is: {counter}</b> </div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text}</button>

const App = () => {
  const title = 'Component State and event handlers';
  // const { counter } = props;
  const [counter, setCounter] = useState(0);

  // setTimeout(
  //   () => setCounter(counter + 1), 1000
  // )
  const decreaseByOne = () => setCounter(counter - 1)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Header title={title} />
      <Display counter={counter} />
      <Button handleClick={decreaseByOne} text='minus' />
      <Button handleClick={setToZero} text='zero' />
      <Button handleClick={increaseByOne} text='plus' />
    </div>
  );
}

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />,
//     document.getElementById('root'))
// }

// refresh();
// counter += 1
// refresh()
// counter += 1
// refresh()

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

ReactDOM.render(<App />, document.getElementById('root'))

/* const App = () => {
  const title = 'Component State and event handlers';

  return (
    <div>
      <Header title={title} />
      <Hello name='Ossei' age='26' />
    </div >
  );
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p> Hello {name}, you are {age} years old </p>
      <p>You were born in {bornYear()}</p>
    </div>
  )
} */