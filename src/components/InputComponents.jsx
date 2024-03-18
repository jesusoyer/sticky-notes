import { useState } from "react";
import FormComponent from "./FormComponent";


export default function InputComponents() {
    const today = new Date();

    
    const hour = String(today.toLocaleTimeString());
    
    
    // Format the time
    const formattedDateTime = `${today.toLocaleDateString()} ${hour}`;



  
console.log(formattedDateTime);

  const [isSaving, setIsSaving] = useState(false);

  const [newNote, setNewNote] = useState({
    id: 0,
    date: formattedDateTime,
    title: "",
    lastName: " ",
    note: "",
  });
  const { title, note, date } = newNote;
  let btnCaption = "save";

  function handleChange(event) {
    const { id, value } = event.target;
    setNewNote((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }
  if (isSaving) {
    console.log("input is saved");
  }
  function handleClick() {
    setIsSaving((isSaving) => !isSaving);
    
    setNoteItems((prevNoteItems) => {
      // Create a new array by copying the previous items and adding the new item
      const newNoteItems = [
        ...prevNoteItems,
        {
          id: prevNoteItems.length + 1,
          date: date,
          title: title.toLocaleUpperCase(),
          
          note: note,
        },
      ];

      return newNoteItems;
    });
  }
  const [noteItems, setNoteItems] = useState([]);

  console.log(noteItems);

  function handleDeleteButton(idToDelete) {
    setNoteItems((prevArray) =>
      prevArray.filter((item) => item.id !== idToDelete)
    );
    console.log("button clicked");
  }

  return (
    <>
   
      <FormComponent
        title={title}
        note={note}
        handleChange={handleChange}
        handleClick={handleClick}
        btnCaption={btnCaption}
      />
      <div>
      <h1 className="text-2xl font-bold mb-4 text-center">List of Items</h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-2   ">
          
            {noteItems.map((item) => (
              <div key={item.id} className="bg-gray-100 p-6 rounded-lg bg-yellow-200 font-handwritten">
                <div className="flex items-center justify-between gap-2 ">
               <h1 className="text-xl mx-4 font-bold flex-grow-1 ">{item.title}</h1>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
                  onClick={() => handleDeleteButton(item.id)} // Pass item.id to the handler
                >
                  X
                </button>
                </div>
                
                <p className="text-gray-600 ">{item.note}</p>
                <p className="mt-4">{item.date}</p>
              </div>
            ))}
            
          
        </div>
      </div>
    </>
  );
}
