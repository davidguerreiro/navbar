import React, { Component } from 'react';

class ContactUs extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Contact Us',
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

export default ContactUs;