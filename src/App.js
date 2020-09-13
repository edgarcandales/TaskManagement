import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm';

import { todos } from './todos.json';

function App() {
  const [State, setState] = useState(todos);

  console.log(State);
  const removeTask = (i) => {
    setState(State.filter((t,index) => index !== i ));
  }



  const tod = State.map((todo, i) => {
    return (
      <div className='col-md-4'>
        <div className='card mt-4'>
          <div className="card-title text-center">
            <h3>{todo.title}</h3>
            <span className='badge badge-pill badge-danger ml-2'>{todo.priority}</span>
          </div>
          <div>
            <div className="card-body">
            {todo.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick = {() => removeTask(i)}>
                Delete
              </button>
            </div>
            
            <p>
              <mark>{todo.responsible}</mark>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='' class='text-white'>
          Tasks
          <span className='badge badge-pill badge-light ml-2'>{State.length}</span>
        </a>
      </nav>

      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-4 text-center'>
          <TodoForm setState={setState} State={State} />
            <img src={logo} className='App-logo' alt='logo' />
            
          </div>

          <div className="col-md-8">
            <div className="row">
            {tod}
            </div>
          </div>
         

        </div>
      </div>
    </div>
  );
}

export default App;
