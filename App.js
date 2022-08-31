import React, { useState } from "react";
import Home from "./src/screens/home";

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  return <Home noteData={noteList} />;
};

export default App;