import rawFetchJokeItem from './api';

const randomFetchData = {
    url: 'https://joke3.p.rapidapi.com/v1/joke',
    fetchData: {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6'        
            },
    }
};

const FetchDataById = {
    url: 'https://joke3.p.rapidapi.com/v1/joke/ab66a6ad230c4192b923b41deb6eddc5',
    fetchData: {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6',       
            },
    }
};

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

export const fetchRandomJokeItem = (id='') => {
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

export const fetchJokeItemById = () => {
    return dispatch => {
        rawFetchJokeItem(randomFetchData)
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
