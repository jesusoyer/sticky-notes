// import { FaThumbtack } from "react-icons/fa6";
import {useState, useEffect} from 'react';
import StickyNote from './StickyNote';



export default function ListComponent({ setNoteItems, noteItems }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://f68sqb3l92.execute-api.us-east-2.amazonaws.com/prod/StickyNotesFunction", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                const valuesArray = data.values
                console.log(valuesArray)
                setNotes(valuesArray); // Set the retrieved data to state
            } else {
                console.error("Failed to fetch data:", await response.text());
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    fetchData();
}, []);




  // const handleDeleteButton = (idToDelete) => {
  //   setNoteItems((prevArray) =>
  //     prevArray.filter((item) => item.id !== idToDelete)
  //   );
  //   console.log("button clicked");
  // };
  
  console.log(notes)



  return (
    <>
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ">
        {/* {noteItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-6  bg-yellow-200 font-handwritten shadow-2xl"
            style={{ wordWrap: 'break-word' }} // Add inline style for word wrapping
          >
            <div className="flex flex-end justify-end gap-2 container whitespace-normal mb-2">
              
              <button
                type="button"
                className="focus:outline-none text-white  hover:bg-red-200 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => handleDeleteButton(item.id)}
              >
              <FaThumbtack color="red" size="2em" />
              </button>
            </div>
            <h1 className="text-lg mx-4 font-bold flex-grow-1 text-center " >
                {item.title}
              </h1>
            <p className="text-gray-600">{item.note}</p>
            <p className="mt-4">{item.date}</p>
          </div>
        ))} */}
        {notes.map(note => (
                    <StickyNote
                        key={note[0]}
                        id={note[0]}
                        date={note[1]}
                        title={note[2]}
                        note={note[3]}
                        
                    />
                ))}
      </div>
    </div>
  </>
  );
}
