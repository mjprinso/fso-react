import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

/* const Display = ({ counter }) => <div> <b>Counter is: {counter}</b> </div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text}</button>

const App = () => {
  const title = 'A more complex State';

  const [counter, setCounter] = useState(0);

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
} */

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (<button onClick={onClick}>    {text}  </button>)

const App = (props) => {
  const title = 'A more complex State';

  // const [clicks, setClicks] = useState({ left: 0, right: 0 })

  /* const handleLeftClick = () => { setClicks({ ...clicks, left: clicks.left + 1 }) }
  const handleRightClick = () => { setClicks({ ...clicks, right: clicks.right + 1 }) } */

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <Header title={title} />

      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
