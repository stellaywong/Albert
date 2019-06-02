import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.track;
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)  //must call this action (same name as edit track form container) so track_form can take in 'action' to accomodate both
        .then(() => this.props.history.push(`/tracks/${trackId}`)); //wherever you want to redirect the user after the form is submitted
    }

    render() {
        return (
            <div className="create-and-edit-track-form-container">
                <h3 className="create_track_heading">{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>

                    <label className="create-and-edit-input-field-label">Title
                        <input //className="signup_and_signin_label"
                            type="text"
                            value={this.state.title}
                            placeholder="The primary artist, author, creator, etc."
                            onChange={this.update('title')} 
                            required
                        />
                    </label>
                    <br></br>
                    <label className="create-and-edit-input-field-label">Lyrics
                        <textarea
                            value={this.state.lyrics}
                            onChange={this.update('lyrics')} 
                            required
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