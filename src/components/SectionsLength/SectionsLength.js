import React from 'react'
import percentCompletedSections from "./utils"

const SectionsLength = ({ chaptersLength, sectionsLength, completedSectionsLength }) => (
    <React.Fragment>
        <div aria-label='Count chapters'>Count chapters:{chaptersLength}</div>
        <div aria-label='Count sections'>Count sections: {sectionsLength}</div>
        <div aria-label='Count completed sections'>Count completed sections: {completedSectionsLength}</div>
        <div aria-label='Percent'>Percent: {percentCompletedSections(completedSectionsLength, sectionsLength)} </div>
    </React.Fragment>
)

export default SectionsLength;