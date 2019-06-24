import React from 'react';
import { Link } from 'react-router-dom';
import CreateAnnotationFormContainer from '../../annotations/annotation_create/create_annotation_container';

class TrackShow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quote: "",
         start_index: "",
         end_index: "",
         annotation_body: "",
      };

      this.lyrics = React.createRef();    // using React reference to snag lyrics object -- otherwise, cannot save object within tags to a variable
   
      this.clickHandler = this.clickHandler.bind(this);
   }

   componentDidMount() {
      // debugger
      // p add_track_debugger
      // debugger waterfall for trackShow
      // debugger
      this.props.fetchTrack(this.props.match.params.trackId).then(()=> {
         this.props.fetchArtist(this.props.track.artist_id);
         this.props.fetchAlbum(this.props.track.album_id);
      });
      //needs to be a thunk action creator -- must return a promise
   }

   // if you're on the trackshow page of track with an id of 3 
   // and you manually change the url to the track of id = 5, 
   // your app refetches the track. 
   // Without the componentDidUpdate, your code will not refetch the track's info because 
   // your app will not know the user is trying to access a new track
   componentDidUpdate(prevProps) {
      // debugger
      if (prevProps.track && (prevProps.track.id != this.props.match.params.trackId)) {   //debug: "prevProps.track &&" ensures that you can refresh the page without breaking it
         this.props.fetchTrack(this.props.match.params.trackId);
      }
   }

   clickHandler(e) {    // create new function that receives event
      debugger
      console.log(window.getSelection());

      return this.setState({
         start_index: window.getSelection().anchorOffset,
         end_index: window.getSelection().focusOffset,
         quote: window.getSelection().toString(),
      })

      debugger

      const start_index = window.getSelection().anchorOffset;
      const end_index = window.getSelection().focusOffset;
      const quote = window.getSelection().toString();
      console.log(start_index);
      console.log(end_index);
      console.log(quote);      
   }

   render() {    //need to put in a render, otherwise you're just returning in a class   
   // debugger
   //  debugger is where you can look at what props is

   // const { track } = this.props;
   // const trackId = track ? track.id : null
   // const trackTitle = track ? track.title : null
   // const trackLyrics = track ? track.lyrics : null

   const { track, artist, album, annotations } = this.props;    //refactoring to be drier
   if (!track) {
      return <div>Loading...</div>;
   }
// debugger
// debugging for add-and-create-track

      // const annotation_bodies = annotations.map((annotation) => {
      //    return (
      //       <AnnotationIndexItem
      //          key={annotation.id}
      //          annotation={annotation.annotation_body}
      //          deletePost={this.props.deletePost}
      //       />
      //    )
      // })

      const logged_in_edit_track_button = this.props.currentUser ? <Link to={`/tracks/${track.id}/edit`} className="edit-button">Edit Poem</Link> : null
// HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE 

      return (
         <div>
            <div className="track-show-whole-cover-container">
               <img src={track.photoUrl} alt="" className="track-image-show-big-cover"/>
               <img src={track.photoUrl} alt="" className="track-image-show-small-cover"/>
               <h2 className="track-show-title">{track.title}</h2>
               {album ? <h3 className="track-show-album">{album.title}</h3> : null}
               {artist ? <h3 className="track-show-artist">{artist.name}</h3> : null}
            </div>

            <div className="track-lyrics-whole-container">
               <h3 className="edit-button-container">
                  {logged_in_edit_track_button}
               </h3> 
{/* // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE */}

               <h3 className="track-lyrics" ref={this.lyrics} 
                     onClick={this.clickHandler}
                     // onMouseDown={this.clickHandler}
                     onMouseUp={this.clickHandler}
                     >{track.lyrics}</h3>


               {(this.state.quote.length != 0) ? <CreateAnnotationFormContainer
                  track={this.props.track}
                  annotator={this.props.currentUser}
                  start_index={this.props.start_index}
                  end_index={this.props.end_index}
                  quote={this.props.quote}
               />
               : null}
               {/* <h3>{annotation_bodies}</h3> */}

               <br></br>
               <Link to="/">Back to Homepage</Link>
            </div>
         </div>
      );
   }
}

export default TrackShow;