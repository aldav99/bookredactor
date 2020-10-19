import { connect } from 'react-redux';

import ChapterList from './ChapterList';

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
    chapters: state.chapters.filter(filters[doVisible(state)]),
    sections: state.sections.filter(filtersSection[doVisibleStation(state)])
})



const mapDispatchToProps = (dispatch) => ({
    toggleChapter: (idx) => dispatch({
        type: 'TOGGLE_CHAPTER',
        idx
    }),
    addChapter: (text) => dispatch({
        type: 'ADD_CHAPTER',
        text
    }),
    addSection: (text, chapter) => dispatch({
        type: 'ADD_SECTION',
        text,
        chapter
    }),
    toggleSection: (section) => dispatch({
        type: 'TOGGLE_SECTION',
        section
    }),
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