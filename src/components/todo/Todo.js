import React from 'react';
import AddTodo from './AddTodo'
import { useDispatch, useSelector } from 'react-redux'


function Todo() {
  const todos = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()

  console.log(todos);
  console.log(dispatch);

  return (
    <div className="todo">
      <h1>Todo on Redux</h1>
      <h3>List of todos</h3>
      <ul>
      {todos.map(todo => {
        return (
          <li key={Math.random()}>
            {todo.todo} 
            <button type="checkbox" onChange={dispatch.checking}></button>
            <button type="checkbox">Delete</button>
          </li>
         
        )
        })
      
      }
      </ul>

      <AddTodo></AddTodo>
      <button>Delete All Todo</button>
    </div>
  );
}

export default Todo;