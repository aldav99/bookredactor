import React from 'react'
import { connect } from 'react-redux'


const Chapter = ({ chapter, isLoading }) => (
    isLoading ?
        <div>isLoading...</div>
        : <div>{chapter.text}</div>
)

const ChapterContainer = connect(
    (state, ownProps) => ({
        isLoading: state.chapters.present.isLoading,
        chapter: state.chapters.present.entries.find(
            chapter => chapter._id === ownProps.match.params.id
        )
    })
)(Chapter)

export default ChapterContainer