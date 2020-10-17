import React from 'react'


const TodoList = ({ todos, toggleTodo, addTodo, addSection, toggleSection }) => {
    return (
        <div>
            {
                todos && todos.map(
                    (todo, idx) => (
                        <div key={todo.text}>
                            <label key={idx}>
                                <input
                                    onChange={() => toggleTodo(idx)}
                                    type='checkbox'
                                    checked={todo.completed}
                                />
                                {' '}
                                {todo.text}
                            </label>
                            <Sections chapter={todo} idx={idx} addSection={addSection} toggleSection={toggleSection}/>
                        </div>
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
                <button>Add Chapter</button>
            </form>
        </div>
    )
}
const Sections = ({ chapter, idx, addSection, toggleSection }) => {
    let sections = chapter.sections
    let chapterIdx = idx
    return (
        <div>
            {
                sections && sections.map(
                    (section, idx) => (
                        <div key={section.text}>
                            <label key={idx}>
                                <input
                                    onChange={() => toggleSection(idx, chapterIdx)}
                                    type='checkbox'
                                    checked={section.completed}
                                />
                                {' '}
                                {section.text}
                            </label>
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        addSection(e.target.text.value, chapterIdx);
                        e.target.text.value = '';
                    }
                }
            >
                <input type='text' name='text' />
                <button >Add Section</button>
            </form>

        </div>
    )
}

export default TodoList