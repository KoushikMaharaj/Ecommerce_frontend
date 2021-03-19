import React, { Component } from 'react';

class ProfileComponent extends Component {
    state = { 
        user:{}
     }
     componentDidMount(){
        let user = JSON.parse(window.localStorage.getItem("user"));
        console.log(user);
        this.setState({ user });
        console.log(this.state.user);
     }
    render() { 
        return ( <div>{this.state.user.userName}</div> );
    }
}
 
export default ProfileComponent;