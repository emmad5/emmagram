import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    renderLinks() {
        return (
        <nav>
            <h1 className='greeting-header'>Welcome to EmmaLens</h1> <h2 className='greeting-tagline'>The fabric of our lives</h2>
            <button onClick={() => this.props.openModal('login')} className='session-button'>Login</button>
            &nbsp;
                &nbsp;
            <button onClick={() => this.props.openModal('signup')} className='session-button'>Sign Up</button>                      
        </nav>
        )
    }

    renderGreeting() {
        return(
        <div>
                <h2 className='greeting-tagline'>Hi {this.props.currentUser.username}</h2>
                <button onClick={this.props.logout} className='session-button'>Logout</button>
        </div>
        )
    }
    render() {
        return this.props.currentUser ? this.renderGreeting() : this.renderLinks();
    }
}
export default Greeting;