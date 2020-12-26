
import React from 'react';

import App from './App';

import { render, act, waitFor, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';


import userEvent from "@testing-library/user-event"

import { createMemoryHistory } from 'history';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { server } from './mocks/server'

describe('Routing 2', () => {

    beforeEach(() => {
        server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => {
        server.close();
    });

    it('It renders Main page correctly', async () => {
        const result = render(<App />)

        await waitFor(() => {
            expect(result.getByText(/Bookredactor App/i)).toBeInTheDocument()
        })
    })


    it('It renders Undo correctly', async () => {
        const result = render(<App />)

        await waitFor(() => {
            expect(result.getByText(/Undo/i)).toBeInTheDocument()
        })

        const addChapterBtn = result.getByText(/Add Chapter/i)
        const undoBtn = result.getByText(/Undo/i)

        const inputChapterEl = result.getByLabelText('chapter-input')


        userEvent.type(inputChapterEl, 'ch2')
        expect(inputChapterEl).toHaveValue('ch2')

        userEvent.click(addChapterBtn);

        await waitFor(() => {
            expect(result.getByLabelText(/ch2/i)).toBeInTheDocument()
        })

        userEvent.click(undoBtn);

        await waitFor(() => {
            expect(result.queryByText(/ch2/i)).not.toBeInTheDocument()
        })
    })

    it('It renders page correctly', async () => {
        const result = render(<App />)

        await waitFor(() => {
            expect(result.getByText(/View/i)).toBeInTheDocument()
        })

        expect(result.getByText(/add section/i)).toBeInTheDocument()

        const addSectionBtn = result.getByText(/add section/i)

        const inputSectionEl = result.getByLabelText('section-input')

        const showAllsectionsBtn = result.getByText(/Show All SECTIONS/i)
        const showCompletedsectionsBtn = result.getByText(/Show Completed SECTIONS/i)
        const showUnCompletedsectionsBtn = result.getByText(/Show UnCompleted SECTIONS/i)

        const divCountChapters = result.getByLabelText('Count chapters')

        const divCountSections = result.getByLabelText('Count sections')

        const divCountCompletedSections = result.getByLabelText('Count completed sections')

        const divPercent = result.getByLabelText('Percent')

        expect(divCountChapters).toHaveTextContent('1')
        expect(divCountSections).toHaveTextContent('1')

        expect(divCountCompletedSections).toHaveTextContent('0')
        expect(divPercent).toHaveTextContent('0')

        userEvent.type(inputSectionEl, 's1')
        expect(inputSectionEl).toHaveValue('s1')

        await waitFor(() => {
            userEvent.click(addSectionBtn);
        })

        expect(inputSectionEl).toHaveValue('')

        await waitFor(() => {
            expect(result.getByLabelText(/s1/i)).toBeInTheDocument()
        })

        expect(result.getByLabelText(/s1/i).checked).toBeTruthy();

        expect(result.getByLabelText('1')).toBeInTheDocument()

        expect(divCountSections).toHaveTextContent('2')
        expect(divCountCompletedSections).toHaveTextContent('1')

        expect(divPercent).toHaveTextContent('50')

        userEvent.click(showCompletedsectionsBtn)
        await waitFor(() => {
            expect(result.getByLabelText(/s1/i)).toBeInTheDocument()
            expect(result.queryByText(/s4/i)).not.toBeInTheDocument()
        })

        userEvent.click(showUnCompletedsectionsBtn)

        await waitFor(() => {
            expect(result.getByLabelText(/s4/i)).toBeInTheDocument()
            expect(result.queryByText(/s1/i)).not.toBeInTheDocument()
        })

        userEvent.click(showAllsectionsBtn)

        userEvent.click(result.getByLabelText(/s1/i))

        await waitFor(() => {
            expect(divCountCompletedSections).toHaveTextContent('0')
        })

        expect(divPercent).toHaveTextContent('0')

        expect(result.getByText(/Add Chapter/i)).toBeInTheDocument()

        const showAllBtn = result.getByText('Show All')
        const showCompletedBtn = result.getByText('Show Completed')
        const showUnCompletedBtn = result.getByText('Show UnCompleted')


        const addChapterBtn = result.getByText(/Add Chapter/i)
        const inputChapterEl = result.getByLabelText('chapter-input')

        userEvent.type(inputChapterEl, 'ch2')
        expect(inputChapterEl).toHaveValue('ch2')

        await waitFor(() => {
            userEvent.click(addChapterBtn);
        })

        expect(inputChapterEl).toHaveValue('')

        await waitFor(() => {
            expect(result.getByLabelText(/ch2/i)).toBeInTheDocument()
        })

        expect(result.getByLabelText('5fab3f')).toBeInTheDocument()

        expect(divCountChapters).toHaveTextContent('2')

        userEvent.click(showCompletedBtn)
        await waitFor(() => {
            expect(result.getByLabelText(/ch2/i)).toBeInTheDocument()
            expect(result.queryByText(/ch1/i)).not.toBeInTheDocument()
        })

        userEvent.click(showUnCompletedBtn)

        await waitFor(() => {
            expect(result.getByLabelText(/ch1/i)).toBeInTheDocument()
            expect(result.queryByText(/ch2/i)).not.toBeInTheDocument()
        })

        userEvent.click(showAllBtn)

        await waitFor(() => {
            expect(result.getByLabelText(/ch1/i)).toBeInTheDocument()
            expect(result.getByLabelText(/ch2/i)).toBeInTheDocument()
        })
    


        // -----------------------------

        const viewBtn = result.getAllByText(/View/i)[0]

        userEvent.click(viewBtn)

        await waitFor(() => {
            expect(result.getByText(/ch1/i)).toBeInTheDocument()
        })

        expect(result.queryByText(/add section/i)).not.toBeInTheDocument()
    })
});


