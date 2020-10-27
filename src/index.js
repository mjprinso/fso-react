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

const Reviews = (props) => {
  if (props.totalReviews <= 0) {
    return (
      <div>
        <h4> Be the first to leave a review </h4>
      </div>
    )
  }

  return (
    <div>
      <h4>{props.totalReviews} reviews</h4>
    </div>
  )
}

const ReviewStats = ({ props }) => {
  var title =  'Statistics';
  if (props.totalReviews > 0) {
    return (
      <div style={{ marginTop: '10px' }}>
        <Header title={title} />
        <div>
          <span>Average Rating: {props.totalReviewScore / props.totalReviews}</span>
        </div>
        <div>
          <span>Positive: {(props.good / props.totalReviews) * 100} %</span>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: '10px' }}>
        <Header title={title} />
          No reviews yet
      </div>
    );
  }
}

const Button = ({ onClick, total, text }) => (<button onClick={onClick} style={{ margin: '0px 10px 0px 0px' }} >{text} | {total}</button>);

const App = (props) => {
  // const title = 'A more complex State';
  const title = 'A more complex State - Ex 1.6 | Unicafe';

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

  /* EX1.6 */
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalReviewScore, setTotalReviewScore] = useState(0);

  const goodReview = () => {
    setGood(good + 1);
    allReview(1);
  }

  const badReview = () => {
    setBad(bad + 1);
    allReview(-1);
  }

  const neutralReview = (review) => {
    setNeutral(neutral + 1);
    allReview(0);
  }

  let averageScore = 0;
  let positivity = 0;
  const allReview = (reviewScore) => {
    setTotalReviews(totalReviews + 1);
    setTotalReviewScore(totalReviewScore + reviewScore);
    averageScore = totalReviewScore / totalReviews;
    positivity = (good / totalReviews) * 100;
  }

  /* return (
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
  ) */

  return (
    <div>
      <Header title={title} />
      <Reviews totalReviews={totalReviews} />
      <div>
        <Button onClick={goodReview} total={good} text='Good' />
        <Button onClick={badReview} total={bad} text='Bad' />
        <Button onClick={neutralReview} total={neutral} text='Neutral' />

        <ReviewStats props={{ good: good, totalReviews: totalReviews, totalReviewScore: totalReviewScore }} />
      </div>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById('root'))
