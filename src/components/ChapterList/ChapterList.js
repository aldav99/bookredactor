import React from 'react'

import { Link } from 'react-router-dom'
import store from '../../redux/store'
import { uploadChapters, fetchChapters, toggleChapterReq } from '../../redux/slices/chapters'



const ChapterList = ({ isLoading, undo, chapters, sections, toggleChapter, addChapter, addSection, toggleSection }) => {
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            {
                chapters && chapters.map(
                    (chapter, idx) => (
                        <div key={idx}>
                            <label key={idx}>
                                <input
                                    onChange={() => store.dispatch(toggleChapterReq(chapter))}
                                    type='checkbox'
                                    checked={chapter.completed}
                                />
                                {' '}
                                {chapter.text}
                            </label>
                            <Link to={`/chapters/${chapter._id}`}>View</Link>
                            <Sections chapter={chapter} idx={idx} addSection={addSection} toggleSection={toggleSection} sections={sections} />
                        </div>
                    )
                )
            }
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        store.dispatch(uploadChapters({ text: e.target.text.value, completed: false }));
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
                                    onChange={() => toggleSection(section, chapter)}
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
