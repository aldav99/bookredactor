import { connect } from 'react-redux';

import Filter from './Filter'

import { setFilter } from '../../redux/actions/visibilityFilter'


const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(setFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filter)