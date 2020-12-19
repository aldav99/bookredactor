import React from 'react'
import { connect } from 'react-redux'


const Chapter = ({ chapter, isLoading, chapterId, chapters }) => (
    isLoading ?
        <div>isLoading...</div>
        : <div>{chapter.text}</div>
)

const ChapterContainer = connect(
    (state, ownProps) => ({
        isLoading: state.chapters.present.isLoading,
        chapter: state.chapters.present.entries.find(
            chapter => chapter._id === ownProps.match.params.id
        ),
        chapterId: ownProps.match.params.id,
        chapters: state.chapters.present.entries
    })
)(Chapter)

export default ChapterContainer