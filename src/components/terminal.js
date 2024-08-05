// src/Terminal.js
import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const handleCommand = (command) => {
    let response;
    switch (command.toLowerCase()) {
      case 'experience':
        response = 'I have 5 years of experience in web development.';
        break;
      case 'skills':
        response = 'My skills include JavaScript, React, Node.js, and more.';
        break;
      case 'help':
        response = 'Available commands: experience, skills, help';
        break;
      default:
        response = `Command not found: ${command}`;
    }
    setOutput([...output, { command, response }]);
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {output.map((entry, index) => (
          <div key={index}>
            <p className="terminal-command">{`> ${entry.command}`}</p>
            <p className="terminal-response">{entry.response}</p>
          </div>
        ))}
      </div>
      <input
        className="terminal-input"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
};

export default Terminal;
