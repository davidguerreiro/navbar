import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Home',
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

export default Home;