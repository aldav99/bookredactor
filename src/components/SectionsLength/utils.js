const percentCompletedSections = (completedSectionsLength, sectionsLength) => {
    return sectionsLength ? Math.round(parseInt(completedSectionsLength) * 100 / parseInt(sectionsLength)) : 0
}

export default percentCompletedSections