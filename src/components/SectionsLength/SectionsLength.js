import React from 'react'

const SectionsLength = ({ chaptersLength, sectionsLength, completedSectionsLength }) => (
    <React.Fragment>
        <div aria-label='Count chapters'>Count chapters:{chaptersLength}</div>
        <div aria-label='Count sections'>Count sections: {sectionsLength}</div>
        <div aria-label='Count completed sections'>Count completed sections: {completedSectionsLength}</div>
        <div aria-label='Percent'>Percent: {(sectionsLength) ? Math.round(parseInt(completedSectionsLength) * 100 / parseInt(sectionsLength)) : 0}</div>
    </React.Fragment>
)

export default SectionsLength;