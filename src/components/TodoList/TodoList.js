import React from 'react'


const TodoList = ({ todos, toggleTodo, addTodo }) => {
    return (
        <div>
            {
                todos && todos.map(
                    (todo, idx) => (
                        <label key={idx}>
                            <input
                                onChange={() => toggleTodo(idx)}
                                type='checkbox'
                                checked={todo.completed}
                            />
                            {' '}
                            {todo.text}
                        </label>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        addTodo(e.target.text.value);
                        e.target.text.value = '';
                    }
                }
            >
                <input type='text' name='text' />
                <button>Add todo</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state
})


export default TodoList