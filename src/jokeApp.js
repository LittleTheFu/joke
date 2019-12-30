import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem, upvoteJokeItem, downvoteJokeItem } from './apiActions';
import { addLocalJoke, clearLocalJoke } from './localActions';
import { showHistory, hideHistory } from './uiActions';
import styled from 'styled-components';
import { ReactComponent as ThumbsUp } from './thumbs_up.svg';
import { ReactComponent as ThumbsDown } from './thumbs_down.svg';
import LoadingOverlay from 'react-loading-overlay';
import JokeList from './jokeList';


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
        localState: state.localState,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRandomJokeFromNet: () => { dispatch(fetchJokeItem()) },
        getJokeById: (id) => { dispatch(fetchJokeItem(id)) },
        upvoteJokeItem: (id) => { dispatch(upvoteJokeItem(id)) },
        downvoteJokeItem: (id) => { dispatch(downvoteJokeItem(id)) },
        addLocalJoke: (joke) => { dispatch(addLocalJoke(joke)) },
        clearLocalJoke: () => { dispatch(clearLocalJoke()) },
        showHistory: () => { dispatch(showHistory()) },
        hideHistory: () => { dispatch(hideHistory()) },
    }
};


class JokeApp extends Component {
    constructor(props) {
        super(props);
        const { uiState } = props;

        this.state = {
            toggleHistoryText: uiState.isHistoryVisible ? 'Hide' : 'Show'
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            toggleHistoryText: nextProps.uiState.isHistoryVisible ? 'Hide' : 'Show',
        };
    }

    getJoke = () => {
        this.props.getRandomJokeFromNet();
    }

    thumbUpClick = () => {
        this.props.upvoteJokeItem(this.props.apiState.id);
        console.log('vote up');
    }

    thumbDownClick = () => {
        this.props.downvoteJokeItem(this.props.apiState.id);
        console.log('vote down');
    }

    refreshCkick = () => {
        this.props.getJokeById(this.props.apiState.id);
    }

    addLocalJokeClick = () => {
        let joke = {
            id: this.props.apiState.id,
            jokeItem: this.props.apiState.jokeItem,
        };
        this.props.addLocalJoke(joke);
    }

    toggleListClick = () => {
        if (this.props.uiState.isHistoryVisible) {
            this.props.hideHistory();
        } else {
            this.props.showHistory();
        }
    }

    componentDidMount() {
        this.getJoke();
    }

    render() {
        return (
            <div>
                <LoadingOverlay active={this.props.uiState.isLoading} spinner text='Loading your content...'>
                    <div>
                        <JokeContainer>
                            {this.props.apiState.jokeItem}
                        </JokeContainer>
                    </div>
                    <div>
                        {this.props.apiState.id}
                    </div>
                    <div>
                        <Wrapper>
                            <ThumbsUp onClick={this.thumbUpClick} />
                        </Wrapper>
                        {this.props.apiState.upvotes}
                    </div>
                    <div>
                        <Wrapper>
                            <ThumbsDown onClick={this.thumbDownClick} />
                        </Wrapper>
                        {this.props.apiState.downvotes}
                    </div>
                    <button onClick={this.getJoke}>
                        get random joke
                </button>
                    <button onClick={this.refreshCkick}>
                        refresh this joke
                </button>
                    <button onClick={this.props.clearLocalJoke}>
                        clear local joke
                </button>
                    <button onClick={this.toggleListClick}>
                        {this.state.toggleHistoryText}
                </button>
                </LoadingOverlay>

                <JokeList items={this.props.localState.recentJokes} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);