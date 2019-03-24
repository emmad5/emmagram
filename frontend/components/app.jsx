import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div className='main'>
        <Modal />
        <header>
            <GreetingContainer />
            <h1>EmmaGram</h1>   
        </header>
        {/* <Route path='/login' component={LoginFormContainer} /> */}
        {/* <Route path='/signup' component={SignupFormContainer} /> */}
    </div>
)

export default App;