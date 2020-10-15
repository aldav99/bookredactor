import React from 'react'

import { connect } from 'react-redux';


const Filter = ({ setFilter }) => {
    return (
        <div>
            <FilterButton onClick={() => { setFilter('SHOW_ALL') }}>
                Show All
            </FilterButton>

            <FilterButton onClick={() => { setFilter('SHOW_COMPLETED') }}>
                Show Completed
            </FilterButton>
            <FilterButton onClick={() => { setFilter('SHOW_UNCOMPLETED') }}>
                Show UnCompleted
            </FilterButton>
        </div>
    )
}
// export default Filter;

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch({
        type: 'SET_FILTER',
        filter
    }),
})

export default connect(null, mapDispatchToProps)(Filter)


const FilterButton = ({ onClick, children }) => (
    <button
        onClick={onClick}>
        {children}
    </button>
)