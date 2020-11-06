import { connect } from 'react-redux';

import ChapterList from './ChapterList';

import { ActionCreators } from 'redux-undo'

const filters = {
    SHOW_ALL: () => true,
    SHOW_COMPLETED: (chapter) => !!chapter.completed,
    SHOW_UNCOMPLETED: (chapter) => !chapter.completed
}

const filtersSection = {
    SHOW_ALL_SECTIONS: (section) => true,
    SHOW_COMPLETED_SECTIONS: (section) => section.completed !== false,
    SHOW_UNCOMPLETED_SECTIONS: (section) => !section.completed
}

const mapStateToProps = (state) => ({
    isLoading: state.chapters.present.isLoading && state.sections.present.isLoading,
    chapters: state.chapters.present.entries.filter(filters[doVisible(state)]),
    sections: state.sections.present.entries.filter(filtersSection[doVisibleStation(state)])
})



const mapDispatchToProps = (dispatch) => ({
    undo: () => dispatch(ActionCreators.undo())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChapterList)

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