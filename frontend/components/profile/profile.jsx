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
                <div className='bio'> {this.props.currentUser.bio}
                </div>
                <br/>
                <a href="#/profile/edit">
                    <button className="edit-button">Edit Profile</button>
                </a>                </div>
                <div className='profile-heading'> 
                
                </div>
            </div>
        )
    }

}

export default Profile;