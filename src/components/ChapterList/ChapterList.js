import React from 'react'

import { Link } from 'react-router-dom'
import store from '../../redux/store'
import { addNumberOfSections, subtractNumberOfCompletedSections, addNumberOfCompletedSections } from '../../redux/slices/chapters'
import { toggleSectionReq } from '../../redux/slices/sections'



const ChapterList = ({ isLoading, undo, chapters, sections, toggleChapterReq, uploadChapters, uploadSection, addNumberOfSections }) => {
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
                                />
                                {' '}
                                {chapter.text}
                            </label>
                            <Link to={`/chapters/${chapter._id}`}>View</Link>
                            <Sections chapter={chapter} idx={idx} sections={sections} uploadSection={uploadSection} addNumberOfSections={addNumberOfSections} />
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        uploadChapters({ text: e.target.text.value, completed: false });
                        e.target.text.value = ''
                    }
                }
            >
                <input type='text' name='text' />
                <button>Add Chapter</button>
            </form>
            <button onClick={() => { undo(); }}>Undo</button>
        </div >
    )
}
const Sections = ({ chapter, sections, uploadSection, addNumberOfSections }) => {
    if (sections) sections = sections.filter(section => section.chapterId[0]._id === chapter._id)
    return (
        <div>
            {
                sections && sections.map(
                    (section, idx) => (
                        <div key={section.text}>
                            {section.completed ? <PickMarker key={idx} section={section} chapter={chapter} change={subtractNumberOfCompletedSections} /> :
                                <PickMarker key={idx} section={section} chapter={chapter} change={addNumberOfCompletedSections} />}
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        Promise.all([
                            uploadSection({ text: e.target.text.value, completed: false, chapterId: chapter._id }),
                            addNumberOfSections(chapter)
                        ])
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



const PickMarker = ({ section, chapter, change }) => {
    return (
        <label >
            <input
                onChange={() => Promise.all([
                    store.dispatch(toggleSectionReq(section)),
                    store.dispatch(change(chapter))
                ])}
                type='checkbox'
                checked={section.completed}
            />
            {' '}
            {section.text}
        </label>
    )
}

export default ChapterList
