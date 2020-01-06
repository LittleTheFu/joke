import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem, upvoteJokeItem, downvoteJokeItem } from './reducers/apiActions';
import { addLocalJoke, clearLocalJoke } from './reducers/localActions';
import { showHistory, hideHistory } from './reducers/uiActions';
import styled from 'styled-components';
import { ReactComponent as ThumbsUp } from './thumbs_up.svg';
import { ReactComponent as ThumbsDown } from './thumbs_down.svg';
import LoadingOverlay from 'react-loading-overlay';
import JokeList from './compnents/jokeList';


const JokeContainer = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

const IdContainer = styled.h1`
    font-size: 1.0em;
    text-align: center;
    color: blue;
`;

const Wrapper = styled.div`
    & path {
        &:hover {
            fill: blue;
        }
    }
`;

const ThumbGroup = styled.div`
    display: flex; 
    justify-content: center;
`;

const ThumbsContainer = styled.div`
    margin: 12px 40px 12px 40px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 250px;
    height: 30px;
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
                    <IdContainer>
                        id: {this.props.apiState.id}
                    </IdContainer>
                    <ThumbGroup>
                        <ThumbsContainer>
                        <Wrapper>
                            <ThumbsUp onClick={this.thumbUpClick} />
                        </Wrapper>
                        {this.props.apiState.upvotes}
                        </ThumbsContainer>
                        <ThumbsContainer>
                        <Wrapper>
                            <ThumbsDown onClick={this.thumbDownClick} />
                        </Wrapper>
                        {this.props.apiState.downvotes}
                        </ThumbsContainer>
                    </ThumbGroup>
                    <ButtonGroup>
                        <Button onClick={this.getJoke}>
                            get random joke
                        </Button>
                        <Button onClick={this.refreshCkick}>
                            refresh this joke
                        </Button>
                        <Button onClick={this.props.clearLocalJoke}>
                            clear local joke
                        </Button>
                        <Button onClick={this.toggleListClick}>
                            {this.state.toggleHistoryText}
                        </Button>
                    </ButtonGroup>
                </LoadingOverlay>

                <JokeList items={this.props.localState.recentJokes} />
                <img src="/images/joke.png" alt="joke_img"/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeApp);