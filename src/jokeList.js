import React, { Component } from 'react';
import styled from 'styled-components';
import ItemButton from './itemButton'

const Container = styled.div`
   margin-top: 80px;
   height:300px;
   background: gray;
   overflow: scroll;
   margin: 10px 40px 0 40px;
`;

class JokeList extends Component {
    render() {
        return (
            <div>
                <Container>
                    {this.props.items.map((item, index) =>
                        (<ItemButton key={index} data={item.jokeItem}></ItemButton>))}
                </Container>
            </div>
        )
    }
};

export default JokeList;