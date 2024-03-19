import { FaThumbtack } from "react-icons/fa6";




export default function ListComponent({ setNoteItems, noteItems }) {
  const handleDeleteButton = (idToDelete) => {
    setNoteItems((prevArray) =>
      prevArray.filter((item) => item.id !== idToDelete)
    );
    console.log("button clicked");
  };

  return (
    <>
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ">
        {noteItems.map((item) => (
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
        ))}
      </div>
    </div>
  </>
  );
}
