const initialState = {
    isLoading: false,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'END_LOADING':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default uiReducer;