import React, { Component } from 'react';

class JokeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.items.map((item, index) => 
                    (<h1 key={index}>{item.id} ## {item.jokeItem}</h1>)
                )}
            </div>
        )
    }
};

export default JokeList;