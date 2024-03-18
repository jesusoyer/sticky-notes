import "./App.css";
import { useState } from "react";
import ListComponent from "./components/ListComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import Header from "./components/Header";

function App() {
  const [noteItems, setNoteItems] = useState([]);

  return (
    <div className="bg-corkboard-medium min-h-screen">
      <div className=" mx-32">
        <Header />
        <FormComponent noteItems={setNoteItems} />
        <ListComponent
          className="mt-10"
          noteItems={noteItems}
          setNoteItems={setNoteItems}
        />
      </div>
    </div>
  );
}

export default App;
