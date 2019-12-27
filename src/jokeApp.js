import React, { Component } from 'react';
import fetchJokeItem from './api';
import { connect } from 'react-redux';
import { getFakeJoke } from './apiActions';

const mapStateToProps = state => {
    return {
        apiState: state.apiState.data,
    };
 };

 const mapDispatchToProps = dispatch => {
     return {
         getJokeData: (jokeData) => dispatch(getFakeJoke(jokeData)),
     }
 };


class JokeApp extends Component {
    constructor(props) {
        super(props);
        const { apiState } = props;

        console.log(apiState);
        this.state = {
            jokeItem: apiState.jokeItem,
            upvotes: apiState.upvotes,
            downvotes: apiState.downvotes,
            id: ""
        };
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        return {
            jokeItem: nextProps.apiState.jokeItem,
            upvotes: nextProps.apiState.upvotes,
            downvotes: nextProps.apiState.downvotes,
        };
     }

      getJokeFakeData = () => {
        let fakeData = {
            jokeItem: "fake joke",
            upvotes: 3,
            downvotes: 9,
            id: ""
        };

        this.props.getJokeData(fakeData);
      };

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
            <button onClick={this.getJokeFakeData}>
                refresh
            </button>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);