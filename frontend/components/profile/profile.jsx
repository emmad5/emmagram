import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='profile-main'> 
                <div className='profile-pic'> 
                   Profile picture
                </div>
                <div className='profile-bio'> 
                {this.props.currentUser.username}
                {this.props.currentUser.bio}
                </div>
                <div className='profile-heading'> 
                
                </div>
            </div>
        )
    }

}

export default Profile;