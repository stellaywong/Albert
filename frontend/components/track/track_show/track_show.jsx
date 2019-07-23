import React from 'react';
import { Link } from 'react-router-dom';
import CreateAnnotationFormContainer from '../../annotations/annotation_create/create_annotation_container';
import AnnotationShow from '../../annotations/annotation_show/annotation_show_container';
import TrackShowLyrics from '../../track/track_show/track_show_lyrics';
import Youtube from './youtube';
import CreateCommentContainer from '../../comments/comment_create/create_comment_container';
import CommentShow from '../../comments/comment_show/comment_show_container';

class TrackShow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quote: "",
         start_index: "",
         end_index: "",
         annotation_body: "",
         displayWholeAnnotation: null,
         displayAnnotator: null,
         beginInSection: null,   // we don't need an endInSection because we can always find out where we're ending (e.target)
      };

      this.lyrics = React.createRef();    // using React reference to snag lyrics object -- otherwise, cannot save object within tags to a variable
   
      // anything with an event listener must be bound, because otherwise we will lose the context
      this.mouseUpHandler = this.mouseUpHandler.bind(this);
      this.mouseDownHandler = this.mouseDownHandler.bind(this);
      this.setAnnotation = this.setAnnotation.bind(this);
      this.clearAnnotation = this.clearAnnotation.bind(this);
   }

   componentDidMount() {
      // p add_track_debugger
      // debugger waterfall for trackShow
      this.props.fetchTrack(this.props.match.params.trackId)
         // .then(()=> {
         // this.props.fetchArtist(this.props.track.artist_id);
         // this.props.fetchAlbum(this.props.track.album_id);
         // // debugger
         // this.props.fetchAnnotations(this.props.match.params.trackId);
         // this.props.fetchComments(this.props.match.params.trackId);
      // });
      //needs to be a thunk action creator -- must return a promise
   }

   // if you're on the trackshow page of track with an id of 3 
   // and you manually change the url to the track of id = 5, 
   // your app refetches the track. 
   // Without the componentDidUpdate, your code will not refetch the track's info because 
   // your app will not know the user is trying to access a new track
   componentDidUpdate(prevProps) {
      // debugger
      if (prevProps.track && (prevProps.track.id != this.props.match.params.trackId)) {   
         //debug: "prevProps.track &&" ensures that you can refresh the page without breaking it
         this.props.fetchTrack(this.props.match.params.trackId);
      } 
   }

   clearAnnotation() {
      this.setState({ quote: "" })
   }
 
   setAnnotation(annotation, annotator){
      // debugger
      this.setState({ displayWholeAnnotation: annotation});
      this.setState({ displayAnnotator: annotator });
   }

   mouseDownHandler(e) {
      // mouseDown
      // BEGIN
      // if (this.state.beginInSection === null) {
         this.setState({
            beginInSection: e.target,     // allows the mouse to know where it has been put down
         })
         return;     //just to get out
      // }
   }

   mouseUpHandler(e) {    // create new function that receives event
      // console.log(window.getSelection());

      // debugger
      // if we click outside of the lyrics, it shouldn't even try to return the values (gets rid of console error message)
      if (this.state.beginInSection === null) {
         return;     //just to get out
      }

      // this will extract the previous section (calculating the offset of the beginInSection)
      let offsetForSection = parseInt(this.state.beginInSection.dataset.offset);
      
      // END
      // to know which object we're currently looking at -- where we ended
      let endInSection = parseInt(e.target.dataset.offset);
         
      // this deconstructs annotations_array out of props so we can use it in the below loop checking for overlap
      const { annotations_array } = this.props;

      // this solves the issue of annotation overlap
      let start_index= window.getSelection().anchorOffset + offsetForSection;
      let end_index= window.getSelection().focusOffset + endInSection;

      // if the user's new annotation overlaps part of an existing annotation
      if (!(start_index) || !(end_index)) {
         this.setState({ beginInSection: null });
         return null;
      };

      for (let i=0; i<annotations_array.length; i++) {
         let annotationStartIndex = Math.min(annotations_array[i].start_index, annotations_array[i].end_index);
         let annotationEndIndex = Math.max(annotations_array[i].start_index, annotations_array[i].end_index);

         // if the user's new annotation overlaps outside, inside of an existing annotation
         if ((annotationStartIndex >= start_index) && (annotationEndIndex <= end_index)) {
               // debugger
               this.setState({ beginInSection: null });
               return null;
            }
      }

      // debugger
      this.setState({      //allows the user to click down and release mouse to create annotation
         start_index: start_index,
         end_index: end_index,
         quote: window.getSelection().toString(),
         beginInSection: null,      // this resets the beginning click for the next annotation the user wants to make (because the top of this function is begun if and only if beginInSection is set to null)
         // displayWholeAnnotation: "blank",
      })
      // debugger
      // toggling either create annotation OR show annotation
      // the quote has annotation-highlighted class.
      // no matter where the click is, is e.target
      // if the e.target doesn't have the quote's class list, it means
      // the user clicked on something else
      if (!e.target.classList.contains('annotation-highlighted')) {
         this.setState({ displayWholeAnnotation: null });
      }

      // debugger
      // const start_index = window.getSelection().anchorOffset;
      // const end_index = window.getSelection().focusOffset;
      // const quote = window.getSelection().toString();
      // console.log(start_index);
      // console.log(end_index);
      // console.log(quote);      
   }

   render() {    //need to put in a render, otherwise you're just returning in a class   
   // debugger is where you can look at what props is


   const { track, artist, album, annotations_array, annotators, comments, commenters } = this.props;    //refactoring to be drier
   if (!track) {
      return <div>Loading...</div>;
   }
   // debugging for add-and-create-track

      // edit button
      const logged_in_edit_track_button = this.props.currentUser ? <Link to={`/tracks/${track.id}/edit`} className="edit-button">Edit Poem</Link> : null
      
      const displayTrackLyrics = track ?              // on the first render, track is undefined. (this will throw errors). as a failsafe, if track exists, that means we have a track lyrics.
         <TrackShowLyrics                             // we're passing track and annotations_array into TrackShowLyrics. their names won't be changed so in the TrackShowLyrics component (lower level than TrackShow) we can work with them with their original names.
            track={track} 
            annotationsForOneTrack={annotations_array}
            annotators={annotators}
            mouseDownHandler={this.mouseDownHandler}
            mouseUpHandler={this.mouseUpHandler}
            setAnnotation={this.setAnnotation} /> 
         : null;

      const displayCreateCommentContainer = track ?
         <CreateCommentContainer
            track={this.props.track}
            commenter={this.props.currentUser}
         />
         : null;
      
      const displayCommentShow = comments ?
         comments.map((comment) => {
            return <CommentShow key={comment.id} comment={comment} commenter={commenters[comment.commenter_id]} />
         })
         : null;

      let annotationSidebar = null;
      // display the annotation, if we click on an annotated quote
      if (this.state.displayWholeAnnotation ) {
         annotationSidebar = 
            <AnnotationShow
               annotation={this.state.displayWholeAnnotation}     // the annotation body of the annotation
               annotator={this.state.displayAnnotator}            // the username of the annotator
               setAnnotation={this.setAnnotation}                 // to make the deleted annotation disappear off the sidebar
            />
         
      } 
      // if there is something clicked (it both exists, and its length is greater than 0), render create annotation form component
      // if this conditional goes first, the condition is checked before the others, and nothing else will happen.
      // so the other things can get checked first.
      else if ( this.state.quote.length != 0) {
         annotationSidebar = 
         <CreateAnnotationFormContainer
            track={this.props.track}
            annotator={this.props.currentUser}
            start_index={this.state.start_index}
            end_index={this.state.end_index}
            quote={this.state.quote}
            clearAnnotation={this.clearAnnotation}
            setAnnotation={this.setAnnotation}
         />
      }

      // if the user has clicked play on the youtube player, and
      // then wants to make an annotation or open an annotation,
      // the youtube player will still play (audio will not be interrupted)
      let youtubeSidebarStyle = null;

      if (this.state.displayWholeAnnotation || this.state.quote.length != 0) {
         youtubeSidebarStyle = {
            display: 'none'
         } 
      } else {
         youtubeSidebarStyle = {
            display: 'block'
         }
      }


      // if the poem has no annotations, or the user has not yet tried to make one,
      // the audio/video recording of the poem is available.
      // if the uploading user didn't add a youtube link for a recording, don't render the video player (because it'll show a broken link)
      let youtubeSidebar = null;

      if (track.youtube_url !== null && track.youtube_url !== undefined) {
         youtubeSidebar =
            <div className="youtube-api-box" style={youtubeSidebarStyle}>
               <label className="screenreader-only">Play a Recording of the Poem Button</label>
               <p>POEM RECORDING: <br></br> </p>
               <Youtube videoId={track.youtube_url} />
            </div>
            ;
      }

      // const borderStyle = this.state.displayWholeAnnotation || this.state.quote ? ({ borderLeft: '3.75px solid rgb(153, 167, 238)', }) : ({ border: 'none', })

      // const arrowStyle = this.state.displayWholeAnnotation || this.state.quote ? ({ display: 'block', }) : ({ display: 'none', }) 

      return (
         <div>
            <div className="track-show-whole-cover-container">
               <img src={track.photoUrl} alt="" className="track-image-show-big-cover"/>
               <img src={track.photoUrl} alt="" className="track-image-show-small-cover"/>
               <label className="screenreader-only">{track.title}</label>
               <h2 className="track-show-title">{track.title}</h2>
               
               {album ? <label className="screenreader-only">Poem's Collection: {album.title}</label> : null}
               {album ? <h3 className="track-show-album">{album.title}</h3> : null}
               
               {artist ? <h3 className="track-show-artist">{artist.name}</h3> : null}
               {artist ? <label className="screenreader-only">Poet: {artist.name}</label> : null}
            </div>


            <div className="track-lyrics-whole-container">
               <h3 className="edit-button-container">
                  <label className="screenreader-only">Edit the Poem</label>
                  {logged_in_edit_track_button}
               </h3> 

            {/* iterate through the lyrics and add spans where the start_index and end_index are */}            

            {/* ternary: if there are no annotations, render track lyrics complete */}
            {/* track lyrics component */}
            <h2 className="lyrics-and-annotations">
               <div className="track-lyrics-wrap">
                  {displayTrackLyrics}
                  {displayCreateCommentContainer}
                  {displayCommentShow}
               </div>

                  <div className="show-annotation-form">
                     {youtubeSidebar}
                     {annotationSidebar}
                  </div>
            </h2>
               
            <br></br>

            <label className="screenreader-only">Back to Homepage Button</label>
            <Link to="/" className="back-to-homepage-button">Back to Homepage</Link>

            </div>
         </div>
      );
   }
}

export default TrackShow;