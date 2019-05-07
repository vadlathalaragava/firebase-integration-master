import React, { Component } from 'react';

import SignupComponent from '../components/SignupComponent';

export default class SignupPage extends Component {

    constructor(props) {
        super(props);

    }
    render(){
        return(
            <SignupComponent navigation={this.props.navigation}/>
        )
    }
}

