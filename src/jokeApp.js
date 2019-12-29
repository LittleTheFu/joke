import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem, upvoteJokeItem, downvoteJokeItem } from './apiActions';
import styled from 'styled-components';
import { ReactComponent as ThumbsUp } from './thumbs_up.svg';
import { ReactComponent as ThumbsDown } from './thumbs_down.svg';
import LoadingOverlay from 'react-loading-overlay';


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
        uiState: state.uiState,
    };
 };

 const mapDispatchToProps = dispatch => {
     return {
         getRandomJokeFromNet: () => { dispatch(fetchJokeItem()) },
         getJokeById: (id) => { dispatch(fetchJokeItem(id)) },
         upvoteJokeItem: (id) => { dispatch(upvoteJokeItem(id)) },
         downvoteJokeItem: (id) => { dispatch(downvoteJokeItem(id)) },

     }
 };


class JokeApp extends Component {
    constructor(props) {
        super(props);
        const { apiState, uiState } = props;

        this.state = {
            jokeItem: apiState.jokeItem,
            upvotes: apiState.upvotes,
            downvotes: apiState.downvotes,
            id: apiState.id,
            isLoading: uiState.isLoading,
        };
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        return {
            jokeItem: nextProps.apiState.jokeItem,
            upvotes: nextProps.apiState.upvotes,
            downvotes: nextProps.apiState.downvotes,
            id: nextProps.apiState.id,
            isLoading: nextProps.uiState.isLoading,
        };
     }

    getJoke = () => {
        this.props.getRandomJokeFromNet();
    }

    thumbUpClick = () => {
        this.props.upvoteJokeItem(this.state.id);
        console.log('vote up');
    }

    thumbDownClick = () => {
        this.props.downvoteJokeItem(this.state.id);
        console.log('vote down');
    }

    refreshCkick = () => {
       this.props.getJokeById(this.state.id);
    }

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
        <div>
            <LoadingOverlay active={this.state.isLoading} spinner text='Loading your content...'>
                <div>
                    777cb5f7fb804fb584f61a19a5daf49f
                </div>
                <div>
                    <JokeContainer>
                        { this.state.jokeItem }
                    </JokeContainer>
                </div>
                <div>
                    { this.state.id }
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
            </LoadingOverlay>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);