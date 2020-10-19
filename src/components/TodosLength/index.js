import { connect } from 'react-redux';

import TodosLength from './TodosLength';

const mapStateToProps = (state) => ({
    todosLength: state.todos.length,
    sectionsLength: state.sections.length
})

export default connect(mapStateToProps)(TodosLength)