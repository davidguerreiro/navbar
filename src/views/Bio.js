import React, { Component } from 'react';

class Bio extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Bio',
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

export default Bio;