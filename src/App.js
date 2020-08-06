import React from 'react'
import './App.css'
import './components/cakesContainer/cakesContainer'
import CakesContainer from './components/cakesContainer/cakesContainer'
import Todo from './components/todo/Todo'

function App() {
  return (
    <div className="App">
      <CakesContainer></CakesContainer> 
      <Todo></Todo>  
    </div>
  );
}

export default App;
