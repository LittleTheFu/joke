import rawFetchJokeItem from './api';

export const fetchJokeItem = () => {
    return dispatch => {
        rawFetchJokeItem()
        .then((data) => {
            dispatch({
                type: 'FETCH_JOKE_SUCCESS',
                data,
             });
        })
        .catch((err) => {
            console.log(err);
        });
    };
};
