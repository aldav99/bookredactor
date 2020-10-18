const initialState = 'SHOW_ALL'

export const visibilityFilter = function (state = initialState, action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
}

// export const visibilityFilterSection = function (state = 'SHOW_ALL_SECTION', action) {
//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.filter;
//         default:
//             return state;
//     }
// }

