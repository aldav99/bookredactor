import React from 'react';
import './App.css';

import ChapterList from './components/ChapterList'
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
        <ChapterList />
        <SectionsLength />
      </div>
    </Provider>
  );
}

export default App;
