import React, { useState } from "react";
import { Note } from './components/noteType'

const App = () => {

  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState<String>("");

  const handleAddNoteForm = (e: React.FormEvent) => {
    e.preventDefault();
    const noteObj: Note = {
      text: noteText,
      id: Math.floor(Math.random() * 100)
    };

    setNotes([...notes, noteObj])
  }

  const handleNoteChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const input = e.target.value;
    setNoteText(input);

  }

  console.log(notes);
  

  return (
    <div className="App">
      <form onClick={handleAddNoteForm} >
        <input type="text" required onChange={handleNoteChange}/>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default App;
