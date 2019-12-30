import React, { Component } from 'react';
import styled from 'styled-components';
import ItemButton from './itemButton'
import { fetchJokeItem } from './apiActions';
import { connect } from 'react-redux';

const Container = styled.div`
    margin-top: 80px;
    height:300px;
    background: gray;
    overflow: scroll;
    margin: 10px 40px 0 40px;
    display: ${props => props.isVisible ? 'block' : 'none'};
`;

const mapStateToProps = state => {
    return {
        isVisible: state.uiState.isHistoryVisible,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getJokeById: (id) => { dispatch(fetchJokeItem(id)) },
    }
};

class JokeList extends Component {
    constructor(props) {
        super(props);
        this.scrollbar = React.createRef();
    };

    handleClick = (id) => {
        return () => {
            this.props.getJokeById(id);
        };
    };

    scrollToBottom = () => {
        this.scrollbar.current.scrollIntoView({ block: "end", behavior: "smooth" });
      }

    componentDidUpdate() {
        this.scrollToBottom();
      }

    render() {
        return (
            <div>
                <Container isVisible={this.props.isVisible} >
                    <div ref={this.scrollbar}>
                    {this.props.items.map((item, index) =>
                        (<ItemButton 
                            key={index}
                            data={item.jokeItem}
                            click={this.handleClick(item.id)}>
                        </ItemButton>))}
                    </div>
                </Container>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeList);