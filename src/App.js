import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
