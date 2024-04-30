import React from 'react';
import { useState } from 'react';

import ToDoListContainer from './components/ToDoList/ToDoListContainer';
import SignUpModal from './components/SignUp/SignUpContainer';

function App() {


  return (
    <>
      <div>
        <h1>Locked In</h1>
        <SignUpModal/>
        <ToDoListContainer/>
      </div>
    </>
  );
}

export default App;
