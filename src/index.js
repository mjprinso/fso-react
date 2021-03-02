import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ onClick, text }) => (<button onClick={onClick} style={{ margin: '5px 10px 0px 0px' }} >{text} </button>);


const App = (props) => {
  const title = 'A more complex State - Ex 1.6 | Anecdotes';

  const [selected, setSelected] = useState(0);
  // const [votes, setVotes] = useState(anecdotes.map((an) => { return 0; }));
  const [votes, setVotes] = useState(anecdotes.map((an, index) => {
    return {
      id: index,
      votes: 0
    }
  }));

  const nextQuote = () => {
    const totalQuotes = props.anecdotes.length;
    const newQuoteIndex = Math.floor(Math.random() * totalQuotes);
    setSelected(newQuoteIndex);
  }

  const vote = () => {
    console.log(`Vote button clicked for index ${selected}`, votes);
    // setVotes([...votes, selected: selected+=1]);
    const cv = [...votes];
    cv[selected].votes += 1;
    setVotes(cv);
    console.log(`After Voting for index ${selected}`, votes);
    /* const copyVotes = [...votes];
    copyVotes[selected] += 1; */
  }

  const MostVoted = () => {
    // var title =  'Statistics';
    if (votes.length) {
      const cvs = [...votes];
      const sortedVotes = cvs.sort((a, b) => Number(b.votes) - Number(a.votes));
      const mV = sortedVotes[0];
      console.log(sortedVotes,mV);
      return (
        <div style={{ marginTop: '10px' }}>
          <h3>Anecdote with most vottes</h3>
          {props.anecdotes[mV.id]}
          <br />
          has {mV.votes} votes
          {/* <div>
            <span>Average Rating: {props.totalReviewScore / props.totalReviews}</span>
          </div>
          <div>
            <span>Positive: {(props.good / props.totalReviews) * 100} %</span>
          </div> */}
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: '10px' }}>
          <h3>No votes yet</h3>
        </div>
      );
    }
  }

  return (
    <div>
      <Header title={title} />
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}
        <br/>
        has {votes[selected].votes} votes
        {/* has {props.vo} */}
      </div>
      <div>
        <Button onClick={vote} text='Vote' />
        <Button onClick={nextQuote} text='Next Quote' />
      </div>
      <div>
        <MostVoted />
      {/* <ReviewStats props={{ good: good, totalReviews: totalReviews, totalReviewScore: totalReviewScore }} /> */}
      </div>
    </div>
  );
}




const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

/* const votes = anecdotes.map((an, index)=> {
  return 0;
}); */

/* const votes = anecdotes.map((an, index)=> {
  return {
    quoteID: index,
    votes: 0
    index: 0
  };
}); */





ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
