
import './App.css';
import BooksCreate from './Components/BooksCreate';
import BooksView from './Components/BooksView';
import React from "react";

function App() {

  return (
    <div className="App">
        <BooksCreate  />
        <BooksView />
    </div>
  );
}

export default App;

