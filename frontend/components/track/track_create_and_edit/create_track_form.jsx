import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            lyrics: this.props.track.lyrics,
            album_title: "",
            artist_name: "",
            uploader_id: this.props.currentUserId,
            photoFile: null,
            photoUrl: null 
        };
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(e) {                 // image preview
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: reader.result});
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();               // submission of the photo form to the backend
        // debugger
        // formData.append('id', this.state.id);
        formData.append('track[title]', this.state.title);
        formData.append('track[lyrics]', this.state.lyrics);
        formData.append('track[album_title]', this.state.album_title);
        formData.append('track[artist_name]', this.state.artist_name);
        formData.append('track[uploader_id]',this.props.currentUserId);
        
        if (this.state.photoFile) {
            formData.append('track[photo]', this.state.photoFile)
        }

        // for (var p of formData) {
        //     console.log(p);
        // }
        // debugger
        this.props.createTrack(formData)  //must call this createTrack (same name as edit track form container) so track_form can take in 'createTrack' to accomodate both
            .then((action) => this.props.history.push(`/tracks/${action.track.id}/`)); 
        }   
        
    render() {
        console.log(this.state);
        console.log(this.props);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;  // if there's a photoUrl, generate a preview. Otherwise, don't.
        return (
            <div className="create-and-edit-track-form-container">
                <h3 className="create_track_heading">Create Poem</h3>
                <form onSubmit={this.handleSubmit}>

                    <label className="create-and-edit-input-field-label">Title
                        <input className="create-and-edit-input-field"
                            type="text"
                            value={this.state.title}
                            placeholder="The primary artist, author, creator, etc."
                            onChange={this.update('title')}
                            required
                        />
                    </label>

                    <br></br>
                    <label className="create-and-edit-input-field-label">Work
                        <textarea className="create-and-edit-lyrics-input-field"
                            value={this.state.lyrics}
                            onChange={this.update('lyrics')}
                            required
                        />
                    </label>
                    <br></br>

                    <label className="create-and-edit-input-field-label">Collection
                        <input className="create-and-edit-input-field"
                            type="text"
                            value={this.state.album_title}       
                            onChange={this.update('album_title')}
                        />

                        <label className="create-and-edit-input-field-label">Writer
                        <input className="create-and-edit-input-field"
                                type="text"
                                value={this.state.artist_name}
                                onChange={this.update('artist_name')}
                            />
                        </label>

                        <label className="create-and-edit-input-field-label" />
                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.uploader_id}
                            onChange={this.update('uploader_id')}
                        />
                    </label>

                    <br></br>
                    <label className="create-and-edit-input-field-label">Submit image for poem
                    <br></br>
                        <input 
                            type="file" 
                            onChange={this.handleFile}
                            className="submit-form-button"
                            >
                        </input>

                        <div>{preview}</div>
                    </label>

                    <input
                        type="submit"
                        value={this.props.formType}
                        className="submit-form-button">
                    </input>

                </form>
            </div>
        );
    }
}

export default withRouter(CreateTrackForm);