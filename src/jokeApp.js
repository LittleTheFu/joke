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
        fill: red;
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
                    <ThumbsUp/>
                </Wrapper>
                { this.state.upvotes }
            </div>
            <div>
                <Wrapper>
                    <ThumbsDown/>
                </Wrapper>
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