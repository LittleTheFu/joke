import rawFetchJokeItem from './api';

const createFetchData = (id = '') => {
    return {
        url: 'https://joke3.p.rapidapi.com/v1/joke/' + id,
        fetchData: {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6'
            },
        }
    };
};

const createDispatchLocalJokeData = (joke) => {
    return {
        type: 'ADD_LOCAL_JOKE',
        joke: {
            id: joke.id,
            jokeItem: joke.content,
        }
    };
};

export const fetchJokeItem = (id = '') => {
    return dispatch => {
        dispatch({
            type: 'BEGIN_LOADING',
        });
        rawFetchJokeItem(createFetchData(id))
            .then((data) => {
                dispatch({
                    type: 'FETCH_JOKE_SUCCESS',
                    data,
                });
                dispatch(createDispatchLocalJokeData(data));
                dispatch({
                    type: 'END_LOADING',
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: 'END_LOADING',
                });
            });
    };
};

const createVoteData = (id, isUpvote) => {
    let voteType = isUpvote ? "upvote" : "downvote";
    return {
        url: "https://joke3.p.rapidapi.com/v1/joke/" + id + "/" + voteType,
        fetchData: {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": "fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6",
                "content-type": "application/x-www-form-urlencoded"
            },
            "body": {},
        }
    };
};

const voteJokeItem = (id, isUpvote, dispatch) => {
    dispatch({
        type: 'BEGIN_LOADING',
    });
    rawFetchJokeItem(createVoteData(id, isUpvote))
        .then((data) => {
            dispatch({
                type: 'FETCH_JOKE_SUCCESS',
                data,
            });
            dispatch({
                type: 'END_LOADING',
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: 'END_LOADING',
            });
        });
};

export const upvoteJokeItem = (id) => {
    return dispatch => {
        voteJokeItem(id, true, dispatch);
    };
};

export const downvoteJokeItem = (id) => {
    return dispatch => {
        voteJokeItem(id, false, dispatch);
    };
};