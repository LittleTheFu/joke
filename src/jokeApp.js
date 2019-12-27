import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem } from './apiActions';

const mapStateToProps = state => {
    return {
        apiState: state.apiState.data,
    };
 };

 const mapDispatchToProps = dispatch => {
     return {
         getJokeFromNet: () => { dispatch(fetchJokeItem()) }
     }
 };


class JokeApp extends Component {
    constructor(props) {
        super(props);
        const { apiState } = props;

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

    getJoke = () => {
        this.props.getJokeFromNet();
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

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);