import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [idValue, updateId] = React.useState(1);
  const [noteArray, updateNoteArray] = React.useState([]);

  function addFunction(obj) {
    obj = {
      key: idValue,
      id: idValue,
      ...obj
    };
    updateNoteArray([obj, ...noteArray]);

    updateId(idValue + 1);
  }

  function deleteFunction(noteId) {
    updateNoteArray(noteArray.filter((obj) => obj.id !== noteId));
  }

  function notesMapping(currNote) {
    return (
      <Note
        key={currNote.key}
        id={currNote.id}
        title={currNote.title}
        content={currNote.content}
        deleteFunction={deleteFunction}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addFunction={addFunction} />
      {noteArray.map(notesMapping)}
      <Footer />
    </div>
  );
}

export default App;
