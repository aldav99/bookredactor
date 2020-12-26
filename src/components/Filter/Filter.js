import React from 'react'


export const Filter = ({ setFilter }) => {
    return (
        <React.Fragment>
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
            <div>
                <FilterSection setFilter={setFilter} />
            </div>
        </React.Fragment>
    )
}


const FilterSection = ({ setFilter }) => {
    return (
        <div>
            <FilterButton onClick={() => { setFilter('SHOW_ALL_SECTIONS') }}>
                Show All SECTIONS
            </FilterButton>

            <FilterButton onClick={() => { setFilter('SHOW_COMPLETED_SECTIONS') }}>
                Show Completed SECTIONS
            </FilterButton>
            <FilterButton onClick={() => { setFilter('SHOW_UNCOMPLETED_SECTIONS') }}>
                Show UnCompleted SECTIONS
            </FilterButton>
        </div>
    )
}



const FilterButton = ({ onClick, children }) => (
    <button
        onClick={onClick}>
        {children}
    </button>
)

export default Filter;