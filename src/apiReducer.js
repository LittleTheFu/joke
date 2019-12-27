const initialState = {
    data: {
       jokeItem: "default joke item",
       upvotes: 10,
       downvotes: 10,
    },
 };

 const apiReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'FETCH_JOKE_SUCCESS':
          return {
             ...state,
             data: {
                ...state.data,
                jokeItem: action.joke.jokeItem,
                upvotes: action.joke.upvotes,
                downvotes: action.joke.downvotes,
             },
          };
        default:
            return state;
    }
};

export default apiReducer;