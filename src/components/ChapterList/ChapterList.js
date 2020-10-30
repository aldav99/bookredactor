import React from 'react'

import { Link } from 'react-router-dom'


const ChapterList = ({ isLoading, undo, chapters, sections, toggleChapter, addChapter, addSection, toggleSection }) => {
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            {
                chapters && chapters.map(
                    (chapter, idx) => (
                        <React.Fragment key={chapter.text}>
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
                                <Link to={`/chapters/${chapter._id}`}>View</Link>
                                <Sections chapter={chapter} idx={idx} addSection={addSection} toggleSection={toggleSection} sections={sections} />
                            </div>
                        </React.Fragment>
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
