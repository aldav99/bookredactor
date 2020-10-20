import React from 'react'


const ChapterList = ({ chapters, sections, toggleChapter, addChapter, addSection, toggleSection }) => {
    chapters = completedChapters(chapters, sections)
    return (
        <div>
            {
                chapters && chapters.map(
                    (chapter, idx) => (
                        <div key={chapter.text}>
                            <label key={idx}>
                                <input
                                    onChange={() => toggleChapter(chapter)}
                                    type='checkbox'
                                    checked={chapter.completed}
                                />
                                {' '}
                                {chapter.text}
                            </label>
                            <Sections chapter={chapter} idx={idx} addSection={addSection} toggleSection={toggleSection} sections={sections} />
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        addChapter(e.target.text.value);
                        e.target.text.value = '';
                    }
                }
            >
                <input type='text' name='text' />
                <button>Add Chapter</button>
            </form>
        </div>
    )
}
const Sections = ({ chapter, sections, addSection, toggleSection }) => {
    if (sections) sections = sections.filter(section => section.id === chapter.id)
    return (
        <div>
            {
                sections && sections.map(
                    (section, idx) => (
                        <div key={section.text}>
                            <label key={idx}>
                                <input
                                    onChange={() => toggleSection(section)}
                                    type='checkbox'
                                    checked={section.completed}
                                />
                                {' '}
                                {section.text}
                            </label>
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        addSection(e.target.text.value, chapter);
                        e.target.text.value = '';
                    }
                }
            >
                <input type='text' name='text' />
                <button >Add Section</button>
            </form>

        </div>
    )
}

export default ChapterList

function completedChapters(chapters, sections) {
    return chapters.map(chapter => completedChapter(chapter, sections)
    )
}

function completedChapter(chapter, sections) {
    if (!sections.length) return chapter
    let sectionsInChapter = sections.filter(section => section.id === chapter.id)

    if (!sectionsInChapter.length) return chapter
    let completedSectionsInChapter = sectionsInChapter.filter(section => section.completed === true)

    return (sectionsInChapter.length === completedSectionsInChapter.length) ? { ...chapter, completed: true } : chapter
}