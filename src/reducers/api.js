const rawFetchJokeItem = ( {url ,fetchData} ) => {
    return new Promise(function(resolve, reject) {
        fetch(url, fetchData)
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