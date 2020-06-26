import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p> Hello {name}, you are {age} years old </p>
      <p>You were born in {bornYear()}</p>
    </div>
  )
}






const App = () => {
  const title = 'Component State and event handlers';

  return (
    <div>
      <Header title={title} />
      <Hello name='Ossei' age='26' />
    </div >
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
