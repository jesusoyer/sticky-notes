import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StickyNote = () => {
  // Define state variables to hold email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Perform any action with email and password (e.g., send to backend)
    console.log("Email:", email);
    console.log("Password:", password);

    const postData = async () => {
        try {
          const response = await fetch("https://f68sqb3l92.execute-api.us-east-2.amazonaws.com/auth/oAuthFunction", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Data posted successfully:', responseData);
            // Perform further actions if needed
          } else {
            console.error('Failed to post data:', await response.text());
          }
        } catch (error) {
          console.error('An error occurred while posting data:', error);
        }
      };
      postData();














    

    // Clear the form inputs after submission (optional)
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mt-40 bg-yellow-200 shadow-2xl p-4"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email} // Bind value to state variable
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password} // Bind value to state variable
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default StickyNote;
