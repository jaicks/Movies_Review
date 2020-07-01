import React, { Component } from 'react';
import Searchform from './Searchform';

export class Landing extends Component {
    render() {
        return (
            <div className = "container">
                <Searchform/>
            </div>
        )
    }
}

export default Landing
