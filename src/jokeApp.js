import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJokeItem } from './apiActions';
import thumbs_up from './thumbs_up.svg';
import thumbs_down from './thumbs_down.svg';
import styled from 'styled-components';

const JokeContainer = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

const Svg = styled.img`
   height: 32px;
   width: 32px;
   margin: 0 8px;

   &:hover {
    box-shadow: 2px 2px;
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
            <div>{thumbs_up}</div>
            <div>
                <Svg src={thumbs_up}></Svg>
                { this.state.upvotes }
            </div>
            <div>
                <Svg src={thumbs_down}></Svg>
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