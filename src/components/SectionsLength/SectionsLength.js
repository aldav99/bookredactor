import React from 'react'

const SectionsLength = ({ chaptersLength, sectionsLength, completedSectionsLength }) => (
    <React.Fragment>
        <div>Count chapters: {chaptersLength}</div>
        <div>Count sections: {sectionsLength}</div>
        <div>Count completed sections: {completedSectionsLength}</div>
        <div>Percent: {(sectionsLength) ? Math.round(parseInt(completedSectionsLength)*100/parseInt(sectionsLength)) : 0}</div>
    </React.Fragment>
)

export default SectionsLength;