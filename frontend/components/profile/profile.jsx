import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='profile-main'> 
                <div className='profile-pic'> 
                  
                </div>
                <div className='profile-bio'> 
                    <h1 className='username-heading'>{this.props.currentUser.username}</h1>
                {this.props.currentUser.bio}
                <a href="#/profile/edit">
                    <button className="edit-profile-button">Edit Profile</button>
                </a>                </div>
                <div className='profile-heading'> 
                
                </div>
            </div>
        )
    }

}

export default Profile;