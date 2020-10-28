import { connect } from 'react-redux';

import SectionsLength from './SectionsLength';

const mapStateToProps = (state) => ({
    chaptersLength: state.chapters.present.length,
    sectionsLength: state.sections.length,
    completedSectionsLength: state.sections.filter(section => section.completed === true).length
})

export default connect(mapStateToProps)(SectionsLength)