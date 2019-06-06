import React from 'react';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
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
debugger
// debugging for add-and-create-track

      const annotation_bodies = this.props.annotations.map((annotation) => {
         return (
            <Annotation
               key={annotation.id}
               annotation={annotation}
            />
         )
      })

      const posts = this.props.posts.map(post => {
         return (
            <PostIndexItem
               key={post.id}
               post={post}
               deletePost={this.props.deletePost} />
         );
      });









      








      return (
         <div>
            <div className="track-show-whole-cover-container">
               <img src={track.photoUrl} alt="" className="track-image-show-big-cover"/>
               <img src={track.photoUrl} alt="" className="track-image-show-small-cover"/>
               <h2 className="track-show-title">{track.title}</h2>
               {artist ? <h3 className="track-show-artist">{artist.name}</h3> : null}
               {album ? <h3 className="track-show-album">{album.title}</h3> : null}
            </div>

            <div className="track-lyrics-whole-container">
               <Link to={`/tracks/${track.id}/edit`} className="edit-button">Edit Poem</Link>
               <h3 className="track-lyrics">{track.lyrics}</h3>

               <h3>{annotation_bodies}</h3>

               <br></br>
               <Link to="/">Back to Homepage</Link>
            </div>
         </div>
      );
   }
}

export default TrackShow;