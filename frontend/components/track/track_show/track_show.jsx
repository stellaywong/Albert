import React from 'react';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
   componentDidMount() {
      // debugger
      // debugger waterfall for trackShow
      this.props.fetchTrack(this.props.match.params.trackId);
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

   const { track } = this.props;    //refactoring to be drier
   if (!track) {
      return <div>Loading...</div>;
   }

      return (
         <div>
            <h2>{track.title}</h2>
            <h3 className="track-lyrics">{track.lyrics}</h3>
            <Link to={`/tracks/${track.id}/edit`}>Edit this Track</Link>
            <br></br>
            <Link to="/">Back to Homepage</Link>
         </div>
      );
   }
}

export default TrackShow;