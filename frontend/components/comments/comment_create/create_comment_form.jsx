import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            comment_body: "",
            commenter_id: this.props.currentUserId,
            parent_comment_id: null, 
            track_id: this.props.match.params.trackId,
            error: false,
        };
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
            comment_body: this.state.comment_body,
            commenter_id: this.props.currentUserId,
            track_id: this.state.track_id,
        }

        this.props.createComment(takeFromStateAndSendToBackend).then(() => {    // the function after the .then clears the comment box after successful submit
            this.setState({
                comment_body: '',
            })
        });
    }

    updateCommentBody(e) {
        this.setState({ comment_body: e.target.value });
    }

    render() {
        return (
            <div className="create-comment-form-container">
                <div className="create-comment-form">
                    <form onSubmit={this.handleSubmit}>
                        <label className="sr-only">Create Comment Form</label>

                        <textarea
                            className="comment-input-field"
                            value={this.state.comment_body}
                            placeholder="Quote a critic's review (with citation!)"
                            onChange={this.updateCommentBody.bind(this)}    //bind so the function doesn't lose its context "this" -- to keep the function updateCommentBody's field when you start typing inside the textarea
                            required
                        ></textarea>

                        {/* custom error message to log in before making comments, otherwise do nothing */}
                        {(this.state.error === true) ?
                            <>
                                <h2 className="sr-only"> Please sign in before adding review! </h2>
                                <h2 className="error-text-message"> Please sign in before adding review! </h2>
                                <br></br>
                            </>
                            : null
                        }

                        <label className="sr-only">Save Review Button</label>
                        <input
                            type="submit"
                            value="Save Review"
                            className="create-annotation-and-comment-button"
                        ></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateCommentForm);