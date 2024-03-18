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
        <h1 className="text-2xl font-bold mb-4 text-center">List of Items</h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-2   ">
          {noteItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg bg-yellow-200 font-handwritten"
            >
              <div className="flex items-center justify-between gap-2 ">
                <h1 className="text-xl mx-4 font-bold flex-grow-1 ">
                  {item.title}
                </h1>
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
