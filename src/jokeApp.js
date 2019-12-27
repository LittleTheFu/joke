import React, { Component } from 'react';

class JokeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeItem: "nothhing",
            upvotes: 0,
            downvotes: 0,
            id: ""
        };
      }

      getJoke = () => {
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
                this.setState ({
                    jokeItem: data.content,
                    upvotes: data.upvotes,
                    downvotes: data.downvotes
                });
            })
            .catch((err) => {
                console.log(err);
            });
      }

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
        <div>
            <div>{ this.state.jokeItem }</div>
            <div>{ this.state.upvotes }</div>
            <div>{ this.state.downvotes }</div>
            <button onClick={this.getJoke}>
                refresh
            </button>
        </div>
        )
    }
}

export default JokeApp;