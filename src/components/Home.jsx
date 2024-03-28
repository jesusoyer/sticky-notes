import {useState} from 'react';
import ListComponent from "./ListComponent.jsx";
import FormComponent from "./FormComponent.jsx";
import Header from "./Header.jsx";



function Home() {
    const [noteItems, setNoteItems] = useState([]);


    return (
      <>
      <Header />
              <FormComponent noteItems={setNoteItems} />
              <ListComponent
                className="mt-10"
                noteItems={noteItems}
                setNoteItems={setNoteItems}
              />
      </>
    );
  }
  
  export default Home;