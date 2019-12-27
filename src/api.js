const rawFetchJokeItem = () => {
    return new Promise(function(resolve, reject) {
        let fetchData = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6'        
            }};
        
            fetch('https://joke3.p.rapidapi.com/v1/joke', fetchData)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
    });
};

export default rawFetchJokeItem;