import React from 'react'

import { Link } from 'react-router-dom'



const ChapterList = ({ isLoading, undo, chapters, sections, toggleChapterReq, uploadChapters, uploadSection, toggleSectionReq, addNumberOfSections, subtractNumberOfCompletedSections, addNumberOfCompletedSections }) => {
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            {
                chapters && chapters.map(
                    (chapter, idx) => (
                        <div key={idx}>
                            <label key={idx}>
                                <input
                                    onChange={() => { toggleChapterReq(chapter) }}
                                    type='checkbox'
                                    checked={chapter.completed}
                                    aria-label={chapter._id}
                                />
                                {' '}
                                {chapter.text}
                            </label>
                            <Link to={`/chapters/${chapter._id}`}>View</Link>
                            <Sections chapter={chapter} idx={idx} sections={sections} uploadSection={uploadSection} toggleSectionReq={toggleSectionReq} addNumberOfSections={addNumberOfSections} subtractNumberOfCompletedSections={subtractNumberOfCompletedSections} addNumberOfCompletedSections={addNumberOfCompletedSections} />
                        </div>
                    )
                )
            }
            <form aria-label="chapter-form"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        uploadChapters({ text: e.target.elements.text.value, completed: false });
                        e.target.elements.text.value = ''
                    }
                }
            >
                <input type='text' name='text' aria-label="chapter-input" />
                <button>Add Chapter</button>
            </form>
            <button onClick={() => { undo(); }}>Undo</button>
        </div >
    )
}
const Sections = ({ chapter, sections, uploadSection, toggleSectionReq, addNumberOfSections, subtractNumberOfCompletedSections, addNumberOfCompletedSections }) => {
    if (sections) sections = sections.filter(section => section.chapterId[0]._id === chapter._id)
    return (
        <div>
            {
                sections && sections.map(
                    (section, idx) => (
                        <div key={section.text}>
                            {section.completed ? <PickMarker key={idx} section={section} chapter={chapter} change={subtractNumberOfCompletedSections} toggleSectionReq={toggleSectionReq} /> :
                                <PickMarker key={idx} section={section} chapter={chapter} change={addNumberOfCompletedSections} toggleSectionReq={toggleSectionReq} />}
                        </div>
                    )
                )
            }
            <form aria-label="section-form"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        Promise.all([
                            uploadSection({ text: e.target.elements.text.value, completed: false, chapterId: chapter._id }),
                            addNumberOfSections(chapter)
                        ])
                        e.target.elements.text.value = '';
                    }
                }
            >
                <input type='text' name='text' aria-label="section-input" />
                <button >Add Section</button>
            </form>
        </div>
    )
}



const PickMarker = ({ section, chapter, change, toggleSectionReq }) => {
    return (
        <label >
            <input
                onChange={() => Promise.all([
                    toggleSectionReq(section),
                    change(chapter)
                ])}
                type='checkbox'
                checked={section.completed}
                aria-label={section._id}
            />
            {' '}
            {section.text}
        </label>
    )
}

export default ChapterList
