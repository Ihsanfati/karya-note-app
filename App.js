import React, { useState } from "react";
import PropTypes from "prop-types";

import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({ currentPage, noteData, setCurrentPage, addNote }) => {
  switch (currentPage) {
    case "home":
      return <Home noteData={noteData} setCurrentPage={setCurrentPage} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote />;
    default:
      return <Home />;
  }
};

CurrentPageWidget.propTypes = {
  currentPage: PropTypes.string.isRequired,
  noteData: PropTypes.instanceOf(Array).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteData={noteList}
      addNote={addNote}
    />
  );
};

export default App;