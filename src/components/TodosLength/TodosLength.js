import React from 'react'

const TodosLength = ({ todosLength, sectionsLength }) => (
    <React.Fragment>
        <div>Count chapters: {todosLength}</div>
        <div>Count sections: {sectionsLength}</div>
    </React.Fragment>
)

export default TodosLength;