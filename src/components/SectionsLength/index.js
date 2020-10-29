import { connect } from 'react-redux';

import SectionsLength from './SectionsLength';

const mapStateToProps = (state) => ({
    chaptersLength: state.chapters.present.entries.length,
    sectionsLength: state.sections.present.length,
    completedSectionsLength: state.sections.present.filter(section => section.completed === true).length
})

export default connect(mapStateToProps)(SectionsLength)