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

  
  let [importance, setImportance] = useState('');
  let [todo_list, setTodo_list] = useState([1,2]);

  return(
  <div id='todo_div' >

    {/* LIST DIV */}
    
    <div id='list_div' >
    
      {todo_list.map((element, index) => {
        return (
          <div key={`${element}_${index}`} onClick='show_description(element)'>
            {element.title}
          </div>
        );
      })}

    </div>

    {/* INPUT_DIV */}
    <div id='input_div'>

        {/* TITLE INPUT */}
        <div id='title_input_label' >Title:</div> {/* label */}
        <input id='title_input' type="text" style={{width:'19vmax', 'min-width':'199px'}} 
          value={title} onChange = {(e)=>
          {
            let new_title = e.target.value;
            setTitle(new_title);
          }}
        />


        {/* DESCRIPTION INPUT */}
        <div id='description_input_label' >Description:</div> {/* label */}
        <textarea id='description_input' type="text" style={{width:'26vmax','min-width':'250px',  height:'56px'}} 
          value={description} onChange = {(e)=>
            {
              let new_description = e.target.value;
              setDescription(new_description);
            }}
        />


        {/* IMPORTANCE INPUT */}
        <div id='description_input_label' >Importance:</div> {/* label */}
        <select style={{'min-width':'80px'}} value={importance} 
          onChange = {(e)=>
          {
            let new_importance = e.target.value;
            setImportance(new_importance);
          }}
        >
          <option value="" key=""></option>
          <option value="low">LOW</option>
          <option value="med">MED</option>
          <option value="high">HIGH</option>
        </select>


        {/* SUBMIT BUTTON */}
        <button id='submt_button' style={{'min-width':'80px', marginBottom:'0px'}}
        onClick={(e)=>
          {
            let new_obj = {};
            new_obj['title'] = title;
            new_obj['description'] = description;
            new_obj['importance'] = importance;
            let new_todo_list = [...todo_list, new_obj]
            setTodo_list(new_todo_list);
          }}
        >Add</button>
     
      </div> {/* end of input div */}
  </div>
  )
}
// let ta =document.querySelector('#description_input_label').getBoundingClientRect();
// var rect = ta;

// console.log(ta.top, ta.right, ta.bottom, ta.left);
// console.log(ta.width)

export default App;

