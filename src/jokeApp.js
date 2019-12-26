import React, { Component } from 'react';

class JokeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {jokeItem: "nothhing"};
      }

    componentDidMount() {
        let request = require("request");

        let options = {
            method: 'GET',
            url: 'https://joke3.p.rapidapi.com/v1/joke',
            headers: {
                'x-rapidapi-host': 'joke3.p.rapidapi.com',
                'x-rapidapi-key': 'fc5476beb4mshc57aa5e3ed24365p114d83jsn1e6a83699ef6'
            }
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);

            console.log(body)
            this.setState ({
                jokeItem: JSON.parse(body).content
            })
        });
    }

    render() {
        return (
        <div>{ this.state.jokeItem }</div>
        )
    }
}

export default JokeApp;