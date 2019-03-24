import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.username = 'guest'.split('');
        this.password = 'password'.split('')
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }
    demoLogin(e) {
        e.preventDefault();
        this.startDemo.bind(this)();
    }
    startDemo() {
        let { username } = this.state;
        let { password } = this.state;
        if (this.username.length > 0) {
            this.setState(
                { username: username + this.username.shift() }, () => {
                    setTimeout(() =>
                        this.startDemo(), 200);
                }
            )
        } else if (this.password.length > 0) {
            this.setState(
                { password: password + this.password.shift() }, () => {
                    setTimeout(() =>
                        this.startDemo(), 200)
                }
            )
        } else {
            this.props.login(this.state).then(this.props.closeModal);
        }

    }

    renderErrors() {
        return(
            <ul className='error-ul'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}

            </ul>
        )
    }

    render() {
        return(
            <div className='session-form'>
            <button onClick={this.props.closeModal} className='x'>x</button>
                <form onSubmit={this.handleSubmit}>
                    <h2 className='session-form-header'>EmmaLens</h2>
                    {this.props.formIntro} 
                    {/* or <span className='other-form-button'>{this.props.otherForm}</span> */}
        
                    
                    {this.renderErrors()}
                
                    <div>
                    <label>
                        {/* Username: */}
                        <input 
                        className='input' 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder='Username'
                        />
                    </label>
                    <br/>
                    <br/>
                        <label>
                        {/* Password: */}
                        <input className='input' type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder='Password'
                        />
                    </label>
                    <br />
                    <br />
                    <input className="session-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
                <button onClick={this.demoLogin} className="session-button" >Demo User</button>
            </div>
        )
    }

}

export default SessionForm;