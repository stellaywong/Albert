import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            lyrics: this.props.track.lyrics,
            album_title: "",
            artist_name: "",
            uploader_id: this.props.currentUserId,
        };
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTrack(this.state)  //must call this createTrack (same name as edit track form container) so track_form can take in 'createTrack' to accomodate both
            .then((action) => this.props.history.push(`/tracks/${action.track.id}/`)); 
        }   
        
    render() {
        return (
            <div className="create-and-edit-track-form-container">
                <h3 className="create_track_heading">{this.props.formType}</h3>
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
                    <label className="create-and-edit-input-field-label">Lyrics
                        <textarea className="create-and-edit-lyrics-input-field"
                            value={this.state.lyrics}
                            onChange={this.update('lyrics')}
                            required
                        />
                    </label>
                    <br></br>

                    <label className="create-and-edit-input-field-label">Album
                        <input className="create-and-edit-input-field"
                            type="text"
                            value={this.state.album_title}       
                            onChange={this.update('album_title')}
                        />

                        <label className="create-and-edit-input-field-label">Artist
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