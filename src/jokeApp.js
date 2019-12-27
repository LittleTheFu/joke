import React, { Component } from 'react';
import fetchJokeItem from './api';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        apiState: state.apiState,
    };
 };

class JokeApp extends Component {
    constructor(props) {
        super(props);
        const { apiState } = props;

        this.state = {
            jokeItem: apiState.data.jokeItem,
            upvotes: apiState.data.upvotes,
            downvotes: apiState.data.downvotes,
            id: ""
        };
      }

    getJoke = () => {
        // fetchJokeItem()
        // .then((data) => {
        //     this.setState ({
        //         jokeItem: data.content,
        //         upvotes: data.upvotes,
        //         downvotes: data.downvotes
        //     });
        // })
        // .catch((err) => {
        //     console.log(err)
        // });
    }

    componentDidMount() {
        // this.getJoke();
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

export default connect(mapStateToProps)(JokeApp);