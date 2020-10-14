import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todosLength: state.todos.todosLength
})