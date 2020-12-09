import React from 'react'
import { render, fireEvent, screen } from '../test-utils'
import App from '../../App'

import { httpClient } from '../../redux/slices/ApiConst'

import { act } from 'react-dom/test-utils'

jest.mock('../../redux/slices/ApiConst')

describe('Test ChapterList',  () =>  {
    it('Renders Loading', async () => {
        const promise = Promise.resolve([])

        httpClient.get.mockImplementationOnce(() => promise);

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
    })
})