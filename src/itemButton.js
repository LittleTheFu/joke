import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-top: 1px;
    border-bottom: 1px solid;
    text-align:center;
    font-size:36px;
    margin: 8px;

    &:hover {
       background: rgba(213,233,227,1);
    }
`;

class ItemButton extends Component {
    render() {
        return (
            <Container onClick={this.props.click}>
                {this.props.data}
            </Container>
        )
    }
};

export default ItemButton;