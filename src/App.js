import React from 'react';
import './App.css';

import TodoList from './components/TodoList'
import Filter from './components/Filter/'

import store from './redux/store'
import { Provider } from 'react-redux';
import SectionsLength from './components/SectionsLength';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Bookredactor App
        <Filter />
        <TodoList />
        <SectionsLength />
      </div>
    </Provider>
  );
}

export default App;
