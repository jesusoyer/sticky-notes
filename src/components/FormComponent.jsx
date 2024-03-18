import { useState } from "react";
import ReusableButton from "./ReusableButton";

export default function FormComponent({ noteItems }) {
  const [isSaving, setIsSaving] = useState(false);

  const today = new Date();
  const hour = String(today.toLocaleTimeString());
  const formattedDateTime = `${today.toLocaleDateString()} ${hour}`;

  const [newNote, setNewNote] = useState({
    id: 0,
    date: formattedDateTime,
    title: "",
    lastName: " ",
    note: "",
  });
  console.log(isSaving);

  const { title, note, date } = newNote;

  console.log(formattedDateTime);

  function handleChange(event) {
    const { id, value } = event.target;
    setNewNote((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  const handleClear = () => {
    setNewNote({
      ...newNote,
      title: "",
      note: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSaving(true);
    setIsSaving((isSaving) => !isSaving);
    noteItems((prevNoteItems) => [
      ...prevNoteItems,
      {
        id: prevNoteItems.length + 1,
        date: date,
        title: title.toLocaleUpperCase(),
        note: note,
      },
    ]);
    handleClear();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      handleSubmit(event); // Call handleSubmit when Enter key is pressed
    }
  };

  return (
    <>
      <div className="mx-auto ml-auto w-1/2 text-center bg-yellow-200 rounded-xl mb-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="mt-10 text-xl">
            Title of Sticky Note
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            placeholder="Write Sticky Note Title Here"
            required
            value={newNote.title}
            onChange={handleChange}
            
          />
          <label className="text-xl">Write Note</label>
          <textarea
            type="text"
            id="note"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
            placeholder="note"
            required
            value={newNote.note}
            onChange={handleChange}
            
          />
          <ReusableButton type="submit" onKeyDown={handleKeyDown}>Pin</ReusableButton>
        </form>
      </div>
    </>
  );
}
