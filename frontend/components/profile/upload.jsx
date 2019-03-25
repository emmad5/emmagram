import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            caption: "",
            imageFile: null,
            imageUrl: "",
            uploadErrors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    handleInput(e) {
        this.setState({ caption: e.currentTarget.value });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        const fileExtension = file.name.split('.').pop();
        const extensions = ['jpg', 'png', 'JPG', 'PNG'];
        if (extensions.includes(fileExtension)) {
            fileReader.onloadend = () => {
                this.setState({ imageFile: file, imageUrl: fileReader.result });
            };
        } else {
            this.setState({uploadErrors: ['Image must be jpg or png']});
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    componentWillUpdate() {
        if(this.state.uploadErrors.length !== 0) {
            this.clearErrors(); 
        }
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image[caption]', this.state.caption);
        if (this.state.imageFile) {
            formData.append('image[photo]', this.state.imageFile);
        }
        this.props.createImage(formData)
            // .then(() => this.props.fetchUser(this.props.user.id))
            .then(() => this.props.history.push("/profile"))
    }
    update() {
        return (e) => {
            this.setState({ caption: e.target.value })
        }
    }

    renderErrors() {
        return this.state.uploadErrors.map(error => {
            return (
                <li>
                    {error}
                </li>
            )
        })
    }
    clearErrors() {
        if(this.state.uploadErrors.length !== 0) {
            this.setState({ uploadErrors: [] })
        }
        
    }

    render() {
        console.log(this.state);
        
        return (
            
            <div className='edit-profile-main'>
                
                <div className='form-upload' >
            <h2 className='upload-tagline'>Upload Photo</h2>
                    <form className='form-upload' onSubmit={this.handleSubmit}>
                        <div className='img-prev'>
                        <img
                            className='image-upload'
                            id='image-preview'
                            src={this.state.imageUrl}
                        />
                    </div>
                    <textarea
                        className='caption-input'
                        value={this.state.caption}
                        onChange={this.update()}
                        maxLength="300"
                        placeholder="Caption"
                    />
                    <input
                        type="file"
                        id="file-selector"
                        onChange={this.handleFile}
                        required
                    />     
                    
                    <input
                        type="submit"
                        value="Submit"
                        className='edit-button'
                    />
                </form>
                <ul className='errors'>
                    {this.renderErrors()}
                </ul>
                </div>
                
            </div>
        );
    }
}