import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   border-top: 1px solid blue;
   text-align:center;
   font-size:36px;
`;

class ItemButton extends Component {
    render() {
        return (
            <Container>
                {this.props.data}
            </Container>
        )
    }
};

export default ItemButton;