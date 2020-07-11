import React from 'react';
import Header from './conponents/Header/Header'
import './App.css';
import './conponents/joke-item/Joke-item'

import Form from './conponents/joke-form/joke-form'

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
