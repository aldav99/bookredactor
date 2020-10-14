import React from 'react'

import { connect } from 'react-redux';

const TodoList = ({ todos, toggleTodo, addTodo }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
        ))}
    </ul>
)

export default TodoList