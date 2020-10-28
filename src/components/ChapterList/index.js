import { connect } from 'react-redux';

import ChapterList from './ChapterList';

import { toggleChapter, addChapter, addSection, toggleSection } from '../../redux/actions/chapters'

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
    chapters: state.chapters.present.filter(filters[doVisible(state)]),
    sections: state.sections.present.filter(filtersSection[doVisibleStation(state)])
})



const mapDispatchToProps = (dispatch) => ({
    toggleChapter: (chapter) => dispatch(toggleChapter(chapter)),

    addChapter: (text) => dispatch(addChapter(text)),

    addSection: (text, chapter) => dispatch(addSection(text, chapter)),

    toggleSection: (section, chapter) => dispatch(toggleSection(section, chapter)),
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