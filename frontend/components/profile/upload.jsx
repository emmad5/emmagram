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
    }

    handleInput(e) {
        this.setState({ caption: e.currentTarget.value });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ imageFile: file, imageUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
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
            .then(() => this.props.fetchUser(this.props.user.id))
            .then(() => this.props.history.push("/profile"))
    }
    update() {
        return (e) => {
            this.setState({ caption: e.target.value })
        }
    }

    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.imageUrl} /> : null;
        return (
            <div className='profile-main'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <img
                            id='image-preview'
                            src={this.state.imageUrl}
                        />
                    </div>
                    <textarea
                       
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
                    />
                 
                </form>
            </div>
        );
    }
}