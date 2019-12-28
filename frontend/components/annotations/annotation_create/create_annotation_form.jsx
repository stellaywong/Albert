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
            error: false,
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
        e.preventDefault();     // prevent automatic refresh

        if (!this.props.currentUserId) {
            this.setState({
                error: true,
            })
            return;             // exit so it doesn't keep looking down
        }

        const takeFromStateAndSendToBackend = {
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
        const that = this;
        this.props.createAnnotation(takeFromStateAndSendToBackend).then((response) => {
            
            that.props.clearAnnotation();
            that.props.setAnnotation(response.annotation.id);
        })  //must call this createTrack (same name as edit track form container) so track_form can take in 'createTrack' to accomodate both
            // .then((action) => this.props.history.push(`/annotations/${action.annotation.id}/`)); // comment this out so we don't redirect to annotations/2
    }

    updateAnnotationBody(e) {
        this.setState({ annotation_body: e.target.value });    //these are objects xx square brackets?
    }

    render() {
        // console.log(this.state);
        // console.log(this.props);
        return (
        <div className="create-and-edit-annotation-form-container">
            <div className="create-and-edit-annotation-form">
                {/* <h3 className="create_track_heading">{this.props.formType}</h3> */}
                <div className="annotation-whole-container">                    
                    <form onSubmit={this.handleSubmit}>

                        {/* <label className="create-and-edit-input-field-label">Annotation */}
                        <label className="sr-only">Create Annotation Form</label>
                        <label className="sr-only">Create Annotation</label>
                        <label className="sr-only">Don't just put the poem in your own words--drop some knowledge!</label>
                        <textarea
                            className="create-annotation-input-field"
                            value={this.state.annotation_body}
                            placeholder="Don't just put the poem in your own words--drop some knowledge!"
                            onChange={this.updateAnnotationBody.bind(this)}
                            required
                        ></textarea>
                        {/* </label> */}

                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.annotator_id}
                            onChange={this.update('annotator_id')}
                        />

                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.id}
                            onChange={this.update('track_id')}
                        />

                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.start_index}
                            onChange={this.update('start_index')}
                        />

                        <input className="hide-this-field"
                            type="integer"
                            value={this.state.end_index}
                            onChange={this.update('end_index')}
                        />

                        <input className="hide-this-field"
                            type="text"
                            value={this.state.quote}
                            onChange={this.update('quote')}
                        />

                        {/* custom error message to log in before making annotations, otherwise do nothing */} 
                        {(this.state.error === true) ?
                            <>
                                <h2 className="sr-only"> Please sign in before creating annotation! </h2>
                                <h2 className="error-text-message"> Please sign in before creating annotation! </h2>
                                <br></br>
                            </>
                            : null
                        }
                        
                        <label className="sr-only">Save Annotation Button</label>
                        <input
                            type="submit"
                            value="Save Annotation"
                            className="create-annotation-and-comment-button">
                        </input>
                        

                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(CreateAnnotationForm);