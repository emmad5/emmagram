import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
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
        <div className='greeting'>
            <GreetingContainer />  
        </div>
        <Switch>
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        </Switch>
 
    </div>
)

export default App;