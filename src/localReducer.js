const initialState = {
    recentJokes:[
        { id: '0012', 
        jokeItem: 'dummy joke'}
    ],
 };

 const MAX_LOCAL_NUM = 7;

 const localReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOCAL_JOKE':
            let jokes = state.recentJokes;
            if ( jokes.length >= MAX_LOCAL_NUM ) {
                jokes.shift();
            }
            return {
                ...state,
                recentJokes: [...jokes, action.joke],
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