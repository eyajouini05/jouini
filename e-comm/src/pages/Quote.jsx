// import React from 'react';
// import './Quote.css';

// function Quote() {
//   return (
//     <div className="container">
//       <img src="https://i.pinimg.com/736x/a1/66/27/a16627b1e40cbb319fda613cd622bd73.jpg" alt="Votre image" className="image" />
//     </div>
//   );
// }

// export default Quote;
import React, { useState } from 'react';
import './Quote.css';

const TextEditor = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2> Thank you for being in our website </h2>
       <h2> Let us a message sweetie</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows={10}
        cols={50}
      />
      
      
    </div>
  );
};

export default TextEditor;
