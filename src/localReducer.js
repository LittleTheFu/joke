const initialState = {
    recentJokes:[
        { id: '0012', 
        jokeItem: 'dummy joke'}
    ],
 };

 const localReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOCAL_JOKE':
            return {
                ...state,
                recentJokes: [...state.recentJokes, action.joke],
            };
        case 'CLEAR_LOCAL_JOKE':
            return {
                ...state,
                recentJokes: [],
            };
        default:
            return state;
        }
 };

 export default localReducer;