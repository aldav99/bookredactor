import React from 'react'

import ChapterList from '../../ChapterList/'
import Filter from '../../Filter/'
import SectionsLength from '../../SectionsLength';

const Main = () => (
    <div className="App">
        Bookredactor App
        <Filter />
        <ChapterList />
        <SectionsLength />
    </div>
)

export default Main