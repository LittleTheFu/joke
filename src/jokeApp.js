import React, { Component } from 'react';
import fetchJokeItem from './api';

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
        fetchJokeItem()
        .then((data) => {
            this.setState ({
                jokeItem: data.content,
                upvotes: data.upvotes,
                downvotes: data.downvotes
            });
        })
        .catch((err) => {
            console.log(err)
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