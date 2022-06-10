import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () =>
{
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');

  return(
<div id='todo_div'>

      {/* TITLE INPUT */}
      <div id='title_input_label' >Title:</div>
      <input id='title_input' type="text" style={{width:'19vw'}} 
        value={title} onChange = {(e)=>
        {
          let new_title = e.target.value;
          setTitle(new_title);
        }}
      />

      {/* DESCRIPTION INPUT */}
      <div id='description_input_label' >Description:</div>
      <textarea id='description_input' type="text" style={{width:'26vw', height:'95px'}} value={description} onChange = {(e)=>
        {
          let new_description = e.target.value;
          setDescription(new_description);
        }}
      />
</div>
  )
}
export default App;

