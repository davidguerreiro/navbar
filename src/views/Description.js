import React, { Component } from 'react';

class Description extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Description',
        };
    }

    render() {
        return(
            <div>
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}

export default Description;