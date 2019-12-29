const initialState = {
    recentJokes:[],
 };

 const localReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOCAL_JOKE':
            console.log('ADD_LOCAL_JOKE');
            return {
                ...state,
                recentJokes: [1,2,3,4,5],
            };
        default:
            return state;
        }
 };

 export default localReducer;