import React from 'react'

import { connect } from 'react-redux';

import TodoList from './TodoList';

const filters = {
    SHOW_ALL: () => true,
    SHOW_COMPLETED: (todo) => !!todo.completed,
    SHOW_UNCOMPLETED: (todo) => !todo.completed
}

const filtersSection = {
    SHOW_ALL_SECTIONS: (section) => true,
    SHOW_COMPLETED_SECTIONS: (section) => section.completed !== false,
    SHOW_UNCOMPLETED_SECTIONS: (section) => !section.completed
}

const mapStateToProps = (state) => ({
    todos: state.todos.filter(filters[doVisible(state)]),
    sections: state.sections.filter(filtersSection[doVisibleStation(state)])
})



const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (idx) => dispatch({
        type: 'TOGGLE_TODO',
        idx
    }),
    addTodo: (text) => dispatch({
        type: 'ADD_TODO',
        text
    }),
    addSection: (text, chapter) => dispatch({
        type: 'ADD_SECTION',
        text,
        chapter
    }),
    toggleSection: (section) => dispatch({
        type: 'TOGGLE_SECTION',
        section
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

function doVisibleStation(state) {
    let filter = filtersSection[state.visibilityFilter]
    if (filter) return state.visibilityFilter
    return 'SHOW_ALL_SECTIONS'
}

function doVisible(state) {
    let filter = filters[state.visibilityFilter]
    if (filter) return state.visibilityFilter
    return 'SHOW_ALL'
}