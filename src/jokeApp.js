import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem } from './apiActions';
import thumbs_up from './thumbs_up.svg';
import thumbs_down from './thumbs_down.svg';


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
            <div>
                { this.state.jokeItem }
            </div>
            <div>
                <img src={thumbs_up} />
                { this.state.upvotes }
            </div>
            <div>
                <img src={thumbs_down} />
                { this.state.downvotes }
            </div>
            <button onClick={this.getJoke}>
                refresh
            </button>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);