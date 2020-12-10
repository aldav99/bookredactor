import React from 'react'
import { render, fireEvent, screen ,waitFor} from '../test-utils'
import userEvent from "@testing-library/user-event"
import App from '../../App'

import { httpClient } from '../../redux/slices/ApiConst'

import { act } from 'react-dom/test-utils'

jest.mock('../../redux/slices/ApiConst')

describe('Test ChapterList', () => {
    it('Renders Loading', async () => {
        const chapterText = 'Ch2'
        const promise = Promise.resolve([])
        const promiseChapter = Promise.resolve([{
            completed: false,
            numberOfCompletedSections: 0,
            numberOfSections: 0,
            text: chapterText,
            _id: "5fab3f"
        }])
        
        // const promiseId = Promise.resolve([{
        //     completed: false,
        //     numberOfCompletedSections: 0,
        //     numberOfSections: 0,
        //     text: chapterText,
        //     _id: "5fab3f"
        // }])

        httpClient.get.mockImplementationOnce(() => promise);
        httpClient.post.mockImplementationOnce(() => promiseChapter);

        // httpClient.get(`/chapters/5fab3f`).mockImplementationOnce(() => promiseId);

        render(<App />, {
            initialState: {
                chapters: {
                    isLoading: false,
                    isError: false,
                    error: null,
                    entries: []
                }
            }
        })

        expect(screen.getByText(/loadin/i)).toBeInTheDocument()
        expect(httpClient.get).toHaveBeenCalled()

        await act(() => promise)
        const headerEl = screen.getByText(/Bookredactor/i)

        expect(headerEl).toBeTruthy()
        const inputChapterEl = screen.getByLabelText('chapter-input')

        expect(screen.getByText(/Add Chapter/i)).toBeInTheDocument()
        userEvent.type(inputChapterEl, chapterText)
        userEvent.click(screen.getByText(/Add Chapter/i))

        expect(httpClient.post).toHaveBeenCalledTimes(1)
        expect(httpClient.post).toHaveBeenCalledWith("/chapters",{"completed": false, "numberOfCompletedSections": 0, "numberOfSections": 0, "text": chapterText})

        await waitFor(() => {
            expect(screen.getByLabelText(chapterText)).toBeInTheDocument()
        })
    })
})