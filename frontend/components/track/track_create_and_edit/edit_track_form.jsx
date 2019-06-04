import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: "",
            lyrics: "",
            // album_title: this.props.album.title,
            // artist_name: this.props.artist.name,
            uploader_id: "",
        };
    }
    
    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId).then(() => {
            this.setState({
                id: this.props.track.id,
                title: this.props.track.title,
                uploader_id: this.props.currentUserId
            })
        });
        this.props.fetchAlbums();
        this.props.fetchArtists();
    }
    
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const that = this;
        this.props.updateTrack(this.state)  //must call this updateTrack (same name as edit track form container) so track_form can take in 'updateTrack' to accomodate both
        .then(() => this.props.history.push(`/tracks/${that.props.track.id}/`)); //wherever you want to redirect the user after the form is submitted
    }   //interpolate this.state, not trackId or track.id, because we don't have a variable called "track"

    render() {
        return (
            <div className="create-and-edit-track-form-container">
                <h3 className="create_track_heading">{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>

                    <label className="create-and-edit-input-field-label">Lyrics
                        <textarea className="create-and-edit-lyrics-input-field"
                            value={this.state.lyrics}
                            onChange={this.update('lyrics')} 
                            required
                        />
                    </label>

                    <div>
                        <input
                            type="submit" 
                            value={this.props.formType} 
                            className="submit-form-button">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(EditTrackForm);