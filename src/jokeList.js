import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin-top: 80px;
   height:300px;
   background: gray;
   overflow: scroll;
   margin: 10px 40px 0 40px;
`;

const ItemContainer = styled.div`
   border-top: 1px solid blue;
   text-align:center;
`;

class JokeList extends Component {
    render() {
        return (
            <div>
                <Container>
                    {this.props.items.map((item, index) =>
                        (<ItemContainer key={index}>
                            <h1>{item.jokeItem}</h1>
                        </ItemContainer>))}
                </Container>
            </div>
        )
    }
};

export default JokeList;