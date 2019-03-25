import React from 'react';
import {Link} from 'react-router-dom'

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
    }

    render() {
        let posts = this.props.images.map(image => {
            return (
                <li key={`image-${image.id}`}>
                    <img
                        key={`image-${image.id}`}
                        src={image.image_url} 
                    />
                </li>
            )
        })
        debugger
        return(
            <div className='profile-main'> 
                <div className='profile-pic'> 
                  
                </div>
                <div className='profile-bio'> 
                <div className='flex-profile'>
                    <h1 className='username-heading'>{this.props.currentUser.username}</h1>
                    <Link to='/upload'><i className="fas fa-cloud-upload-alt"></i></Link>
                </div>
                <div className='bio'> {this.props.currentUser.bio}
                </div>
                <br/>
                <a href="#/profile/edit">
                    <button className="edit-button">Edit Profile</button>
                </a> 
                    <ul>
                        {posts.reverse()}
                    </ul>               
                </div>
                <div className='profile-heading'> 
                
                </div>
                
            </div>
        )
    }

}

export default Profile;