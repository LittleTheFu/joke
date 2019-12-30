import React, { Component } from 'react';

class JokeList extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, index) => 
                    (<h1 key={index}>{item.jokeItem}</h1>)
                )}
            </div>
        )
    }
};

export default JokeList;