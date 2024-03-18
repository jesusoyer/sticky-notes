import ReusableButton from "./ReusableButton";

export default function FormComponent
({ title, handleChange, note, handleClick, btnCaption }) {
  const handleClear = () => {
    handleChange({ target: { id: 'title', value: '' } }); // Clear title
    handleChange({ target: { id: 'note', value: '' } });  // Clear note
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    handleClick(); // Call the handleClick function to submit the form
    handleClear();
  };


    return (
      <>
      <div className="mx-auto ml-auto w-1/2 text-center bg-yellow-200 rounded-xl mb-5">
      <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="mt-10 text-xl ">Title of Sticky Note</label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto "
          placeholder="Write Sticky Note Title Here"
          required
          value={title}
          onChange={handleChange}
          
        />
       
        {/* <label>Subject</label>
        <input
          type="text"
          id="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={handleChange}
        /> */}
        <label className="text-xl">Write Note</label>
        <textarea
          type="text"
          id="note"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
          placeholder="note"
          required
          value={note}
          onChange={handleChange}
        />
               <ReusableButton type="submit">{btnCaption}</ReusableButton> 
</form>
         </div>
      </>
    );
  }