import { rest } from 'msw'

export const handlers = [
    rest.get('https://chapters-74b6.restdb.io/rest/chapters', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    _id: "5fab3f4540e91b690000072f",
                    text: "ch1",
                    completed: false,
                    numberOfSections: 1,
                    numberOfCompletedSections: 0
                },
                // {
                //     _id: "5fab3f4540e91b690000072g",
                //     text: "ch2",
                //     completed: false,
                //     numberOfSections: 1,
                //     numberOfCompletedSections: 0
                // }
            ])
        )
    }),
    rest.get('https://chapters-74b6.restdb.io/rest/sections', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    _id: "5fb0d534b981b550000011c5",
                    text: "s4",
                    completed: false,
                    chapterId: [
                        {
                            _id: "5fab3f4540e91b690000072f",
                            text: "ch1",
                            completed: false,
                            numberOfSections: 1,
                            numberOfCompletedSections: 0
                        }
                    ]
                },
                // {
                //     _id: "5fb0d534b981b550000011c6",
                //     text: "s5",
                //     completed: false,
                //     chapterId: [
                //         {
                //             _id: "5fab3f4540e91b690000072g",
                //             text: "ch2",
                //             completed: false,
                //             numberOfSections: 1,
                //             numberOfCompletedSections: 0
                //         }
                //     ]
                // }

            ])
        )
    }),
    rest.post('https://chapters-74b6.restdb.io/rest/chapters', async (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json(
                {
                    ...req.body,
                    completed: true,
                    _id: "5fab3f"
                }
            )
        )
    }),
    rest.put('https://chapters-74b6.restdb.io/rest/chapters/5fab3f4540e91b690000072f', async (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json(
                {
                    ...req.body
                }
            )
        )
    }),
    rest.get('https://chapters-74b6.restdb.io/rest/chapters/5fab3f4540e91b690000072f', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    ...req.body
                }
            )
        )
    }),
    rest.post('https://chapters-74b6.restdb.io/rest/sections', async (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json(
                {
                    ...req.body,
                    completed: true,
                    chapterId: [{
                        _id: "5fab3f4540e91b690000072f",
                        // text: "ch1",
                        // completed: false,
                        // numberOfSections: 2,
                        // numberOfCompletedSections: 0
                    }],
                    _id: "1"
                }
            )
        )
    }),
    rest.put('https://chapters-74b6.restdb.io/rest/sections/1', async (req, res, ctx) => {
        return res(
            ctx.status(201),
            ctx.json(
                {
                    ...req.body
                }
            )
        )
    }),
]

