import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from './profile/profile_container';
import EditProfileContainer from './profile/edit_profile_container';
import UserPageContainer from './profile/user_page_container';
import UploadContainer from './profile/upload_container';
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
            <ProtectedRoute path='/profile/edit' component={EditProfileContainer} />
            <ProtectedRoute path='/users/:id' component={UserPageContainer} />
            <ProtectedRoute path='/upload' component={UploadContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        </Switch>
 
    </div>
)

export default App;