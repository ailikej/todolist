import './App.css';
import { Component } from 'react';
import { Body, Body2 } from "./components/Body"
import Header from './components/Header';
import MyForm from './components/MyForm';
import FetchRandomUser from './components/FetchRandomUser';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      {/* <MyForm /> */}
      {/* <FetchRandomUser /> */}
      {/* < Counter /> */}
      <TodoList />
    </div>
  );
}

export default App;
