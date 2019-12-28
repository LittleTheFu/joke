import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem } from './apiActions';
import styled from 'styled-components';
import { ReactComponent as ThumbsUp } from './thumbs_up.svg';
import { ReactComponent as ThumbsDown } from './thumbs_down.svg';



const JokeContainer = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

const Wrapper = styled.div`
    & path {
        &:hover {
            fill: blue;
        }
    }
`;

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

    thumbUpClick = () => {
        console.log('vote up');
    }

    thumbDownClick = () => {
        console.log('vote down');
    }

    refreshCkick = () => {
        console.log('refresh this joke');
    }

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
        <div>
            <div>
                <JokeContainer>
                    { this.state.jokeItem }
                </JokeContainer>
            </div>
            <div>
                <Wrapper>
                    <ThumbsUp onClick={this.thumbUpClick}/>
                </Wrapper>
                { this.state.upvotes }
            </div>
            <div>
                <Wrapper>
                    <ThumbsDown onClick={this.thumbDownClick}/>
                </Wrapper>
                { this.state.downvotes }
            </div>
            <button onClick={this.getJoke}>
                get random joke
            </button>
            <button onClick={this.refreshCkick}>
                refresh this joke
            </button>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);