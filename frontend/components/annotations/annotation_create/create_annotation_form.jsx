import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateAnnotationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            id: this.props.track.id,
            quote: this.props.quote,
            start_index: this.props.start_index,
            end_index: this.props.end_index,
            annotation_body: "",
            annotator_id: this.props.currentUserId,
            // annotation only gets its own id after hitting the database
        };
        // debugger
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const takeFromState = {
            annotation_body: this.state.annotation_body,
            start_index: this.state.start_index,
            end_index: this.state.end_index,
            quote: this.state.quote,
            annotator_id: this.props.currentUserId,
            track_id: this.state.id,
        }
        // debugger 
        // for (var p of formData) {
        //     console.log(p);
        // }
        // debugger
        const that = this;
        this.props.createAnnotation(takeFromState).then(() => {
            // debugger 
            that.props.clearAnnotation()
        })  //must call this createTrack (same name as edit track form container) so track_form can take in 'createTrack' to accomodate both
            // .then((action) => this.props.history.push(`/annotations/${action.annotation.id}/`)); // comment this out so we don't redirect to annotations/2
    }

    updateAnnotationBody(e) {
        this.setState({ annotation_body: e.target.value });    //these are objects xx square brackets?
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        return (
        <div className="create-and-edit-annotation-form-container">
            <div className="create-and-edit-annotation-form">
                {/* <h3 className="create_track_heading">{this.props.formType}</h3> */}
                <form onSubmit={this.handleSubmit}>

                    {/* <label className="create-and-edit-input-field-label">Annotation */}
                    <textarea
                        className="create-annotation-input-field"
                        value={this.state.annotation_body}
                        placeholder="Don't just put the poem in your own words--drop some knowledge!"
                        onChange={this.updateAnnotationBody.bind(this)}
                        required
                    ></textarea>
                    {/* </label> */}

                    <label className="create-and-edit-input-field-label">
                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.annotator_id}
                            onChange={this.update('annotator_id')}
                        />
                    </label>

                    <label className="create-and-edit-input-field-label">
                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.id}
                            onChange={this.update('track_id')}
                        />
                    </label>

                    <label className="create-and-edit-input-field-label">
                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.start_index}
                            onChange={this.update('start_index')}
                        />
                    </label>

                    <label className="create-and-edit-input-field-label">
                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.end_index}
                            onChange={this.update('end_index')}
                        />
                    </label>

                    <label className="create-and-edit-input-field-label">
                        <input className="hide-this-field"
                            type="text"
                            value={this.state.quote}
                            onChange={this.update('quote')}
                        />
                    </label>

                    <input
                        type="submit"
                        value="Save"
                        className="create-annotation-button">
                    </input>

                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(CreateAnnotationForm);