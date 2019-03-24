import React from 'react';


class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            bio: this.props.user.bio,
            uploadErrors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.bio.length > 150) {
            this.setState({ uploadErrors: ['Bio cannot be longer than 150 characters'] })
        } else {
            this.props.update(this.state)
                .then(() => this.props.history.push("/profile"))
        }
    }

    renderErrors() {
        return (
            <ul>
                <li>
                    {this.state.uploadErrors}
                </li>
            </ul>
        );
    }

    render() {
        return (
            <div className='profile-main'>
                <div>
                </div>
                <div className='profile-bio'>
                    <h1 className='greeting-tagline'>Edit Profile</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderErrors()}

                        <div>
                            <label className='label-flex'>
                                <div className='bio-edit'> Username:</div>
                             
                                <input
                                    className='input'
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder='Username'
                                />
                            </label>
                            <br />
                            <br />
                            <label className='label-flex'>
                                <div className='bio-edit'> Bio:</div>
                             
                                <textarea
                                    className="textarea-input"
                                    value={this.state.bio}
                                    onChange={this.update("bio")}
                                    placeholder='Bio'
                                ></textarea>
                            </label>
                            <br />
                            <br />
                            <input className="edit-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
                <div className='profile-heading'>

                </div>
            </div>
        )
    }

}

export default EditProfile