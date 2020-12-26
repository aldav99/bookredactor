import { connect } from 'react-redux';

import SectionsLength from './SectionsLength';

const mapStateToProps = (state) => ({
    chaptersLength: state.chapters.present.entries.length,
    sectionsLength: state.sections.present.entries.length,
    completedSectionsLength: state.sections.present.entries.filter(section => section.completed === true).length 
})

export default connect(mapStateToProps)(SectionsLength)