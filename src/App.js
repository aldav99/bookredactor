import React from 'react';
import './App.css';

import TodoList from './components/TodoList'
import Filter from './components/Filter/'

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
