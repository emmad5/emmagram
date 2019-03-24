import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    renderLinks() {
        return (
        <nav>
            <button onClick={() => this.props.openModal('login')}>Login</button>
            &nbsp;
            &nbsp;
            <button onClick={() => this.props.openModal('signup')}>Sign Up</button>                      
        </nav>
        )
    }

    renderGreeting() {
        return(
        <div>
        <h2>Hi {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Logout</button>
        </div>
        )
    }
    render() {
        return this.props.currentUser ? this.renderGreeting() : this.renderLinks();
    }
}
export default Greeting;