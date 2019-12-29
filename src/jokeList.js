import React, { Component } from 'react';

class JokeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.items.map((item) => 
                    (<h1>{item.id} ## {item.jokeItem}</h1>)
                )}
            </div>
        )
    }
};

export default JokeList;