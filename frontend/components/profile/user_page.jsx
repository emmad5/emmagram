import React from 'react';

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
        if (parseInt(this.props.userId) === this.props.session.id) {
            this.props.history.push("/profile");
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUser(this.props.userId);
            if (parseInt(this.props.userId) === this.props.session.id) {
                this.props.history.push("/profile");
            }
        }
    }

    render() {
        let username;
        let bio;
        if (this.props.user) {
            username = this.props.user.username;
            bio = this.props.user.bio;
        } else {
            username = 'User not found'
        }
        return (
            <div className='profile-main'>
                <div className='profile-pic'>

                </div>
                <div className='profile-bio'>
                    <h1 className='username-heading'>{username}</h1>
                    <div className='bio'> {bio}
                    </div>
                    <br />
               </div>
                <div className='profile-heading'>

                </div>
            </div>
        )
    }

}

export default User;