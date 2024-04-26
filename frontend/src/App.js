import React, { useState } from 'react';
import './App.css'; 

const ConditionalRenderComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [inputError, setInputError] = useState(false); // State to track input error

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setUserInput(value);
    } else if (name === 'age') {
      setUserAge(value);
    } else if (name === 'email') {
      setUserEmail(value);
    }
    // Reset input error when user changes input
    setInputError(false);
  };

  const handleSubmit = () => {
    if ((userInput.toLowerCase() === 'khaled' && userEmail.toLowerCase().includes('khaled')) ||
        (userInput.toLowerCase() === 'blouza' && userEmail.toLowerCase().includes('blouza'))) {
      setShowMessage(true);
      alert("welcome");
    } else {
      alert("Please check your information.");
      setInputError(true); // Set input error if fields don't match
      setTimeout(() => setInputError(false), 2500); // Reset input error after 2 seconds
      
    }
  };

  return (
    <div className="container"> 
      <h1>Hello, please enter your informations to login:</h1>
      <input
        type="text"
        name="name"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={userAge}
        onChange={handleChange}
        placeholder="Enter your age"
      />
      <br />
      <input
        type="email"
        name="email"
        value={userEmail}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <br />
      <button className={inputError ? 'error' : ''} onClick={handleSubmit}>Submit</button> {/* Apply error class */}
      {showMessage && <RenderMessage userInput={userInput} />}
    </div>
  );
};
 
const RenderMessage = ({ userInput }) => {
  return (
    <div>
      <div>Hello, {userInput}! Welcome!</div>
    </div>
  );
};

export default ConditionalRenderComponent;
