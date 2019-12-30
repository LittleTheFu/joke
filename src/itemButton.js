import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-top: 1px solid blue;
    text-align:center;
    font-size:36px;

    &:hover {
       background: rgba(213,233,227,1);
    }
`;

class ItemButton extends Component {

    hanleClick = () => {
        console.log('click buttonItem');
    };

    render() {
        return (
            <Container onClick={this.hanleClick}>
                {this.props.data}
            </Container>
        )
    }
};

export default ItemButton;