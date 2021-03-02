import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Note from './components/Note';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const Title = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const addNote = (event) => {
    event.preventDefault();
    console.log('Button clicked', event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
      id: notes.length +1,
    }

    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const notesToShow =  showAll ? notes : notes.filter (note => note.important === true);

  return (
    <div>
      <Title title='PART 2 - Rendering a collection' />
      <div>
        <h4>Notes</h4>
        <button onClick={()=> setShowAll(!showAll)}>
          show { showAll ? 'important' : 'all'}
        </button>
        <ul>
          {
            notesToShow.map(note =>
              <Note key={note.id} note={note} />
            )
          }
        </ul>

        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default App;
