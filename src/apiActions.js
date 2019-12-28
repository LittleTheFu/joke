import rawFetchJokeItem from './api';

const createFetchData = (id='') => {
    console.log(id);
    console.log('https://joke3.p.rapidapi.com/v1/joke/' + id);
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