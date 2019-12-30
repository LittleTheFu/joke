const initialState = {
    isLoading: false,
    isHistoryVisible: true,
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
        case 'SHOW_HISTORY':
            return {
                ...state,
                isHistoryVisible: true,
            };
        case 'HIDE_HISTORY':
            return {
                ...state,
                isHistoryVisible: false,
            };
        default:
            return state;
    }
};

export default uiReducer;