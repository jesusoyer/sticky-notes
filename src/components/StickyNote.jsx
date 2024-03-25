import React from 'react';

const StickyNote = ({ id, title, note, date }) => {
    return (
        <div
        key={id}
        className="bg-gray-100 p-6  bg-yellow-200  shadow-2xl"
        style={{ wordWrap: 'break-word' }} // Add inline style for word wrapping
      >
        <h1 className="text-lg mx-4 font-bold flex-grow-1 text-center " >
                {title}
              </h1>
            <p className="">{note}</p>
            <p className="mt-4">{date}</p>
        
            
        </div>
    );
};

export default StickyNote;