import rawFetchJokeItem from './api';

const createFetchData = (id='') => {
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

export const fetchJokeItem = (id='') => {
    return dispatch => {
        rawFetchJokeItem(createFetchData(id))
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

const createUpvoteData = (id) => {
    console.log("https://joke3.p.rapidapi.com/v1/joke/" + id + "/upvote");
    return {
        url: "https://joke3.p.rapidapi.com/v1/joke/" + id + "/upvote",
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

export const upvoteJokeItem = (id) => {
    return dispatch => {
        rawFetchJokeItem(createUpvoteData(id))
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

const createDownvoteData = (id) => {
    console.log("https://joke3.p.rapidapi.com/v1/joke/" + id + "/downvote");
    return {
        url: "https://joke3.p.rapidapi.com/v1/joke/" + id + "/downvote",
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

export const downvoteJokeItem = (id) => {
    return dispatch => {
        rawFetchJokeItem(createDownvoteData(id))
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