import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: this.props.track.title,
            lyrics: this.props.track.lyrics,
            // album_id: this.props.track.album_id,
            // artist_id: this.props.track.artist_id,
            album_id: 3,
            artist_id: 3,
            uploader_id: this.props.currentUserId,
        };
        // this.setState({ currentUserId: this.props.currentUserId});
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)  //must call this action (same name as edit track form container) so track_form can take in 'action' to accomodate both
        .then(() => this.props.history.push(`/tracks/${this.state.id}/`)); //wherever you want to redirect the user after the form is submitted
    }   //interpolate this.state, not trackId or track.id, because we don't have a variable called "track"

    render() {
        // debugger
        // this debugger will be hit twice by the render methods

        console.log(this.props.uploader_id)
        // testing: this prints the user id on the page
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
                    {/* <label>{this.state.uploader_id}</label> */}
                    {/* testing: if exists, will render */}
                    <br></br>
                    <label className="create-and-edit-input-field-label">Lyrics
                        <textarea className="create-and-edit-lyrics-input-field"
                            value={this.state.lyrics}
                            onChange={this.update('lyrics')} 
                            required
                        />
                    </label>
                    <br></br>
                    {/* <label className="create-and-edit-input-field-label"> */}
                    <label>
                        {/* Album */}
                        {/* <input className="create-and-edit-input-field" */}
                        <input
                            type="integer"
                            value={this.state.album_id}       
                            onChange={this.update('album_id')}
                            style={{ visibility: 'hidden' }}    // temporary: default for form usability
                        />
                    </label>
                    {/* <label className="create-and-edit-input-field-label"> */}
                    <label>
                        {/* Artist */}
                        {/* <input className="create-and-edit-input-field" */}
                        <input
                            type="integer"
                            value={this.state.artist_id}
                            onChange={this.update('artist_id')}
                            style={{ visibility: 'hidden' }}    // temporary: default for form usability
                        />
                    </label>
                    {/* <label className="create-and-edit-input-field-label">
                        <input className="create-and-edit-input-field" */}
                    <label>
                        <input
                            type="integer"
                            value={this.state.uploader_id}
                            onChange={this.update('uploader_id')}
                            style={{visibility: 'hidden'}}
                        />
                    </label>

                    <div>
                        <input type="submit" value={this.props.formType} className="add-form-button" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(TrackForm);