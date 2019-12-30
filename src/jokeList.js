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
`;

const mapDispatchToProps = dispatch => {
    return {
        getJokeById: (id) => { dispatch(fetchJokeItem(id)) },
    }
};

class JokeList extends Component {
    handleClick = (id) => {
        return () => {
            this.props.getJokeById(id);
        };
    };

    render() {
        return (
            <div>
                <Container>
                    {this.props.items.map((item, index) =>
                        (<ItemButton 
                            key={index}
                            data={item.jokeItem}
                            click={this.handleClick(item.id)}>
                        </ItemButton>))}
                </Container>
            </div>
        )
    }
};

export default connect(null, mapDispatchToProps)(JokeList);