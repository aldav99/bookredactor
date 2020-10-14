import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/Chapter'
import Filter from './components/Filter/Filter'

import store from './redux/store'
import { Provider } from 'react-redux';
import TodosLength from './components/TodosLength';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Bookredactor App
        <Filter />
        <TodoList />
        <TodosLength />
      </div>
    </Provider>
  );
}

export default App;
