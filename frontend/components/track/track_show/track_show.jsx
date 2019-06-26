import React from 'react';
import { Link } from 'react-router-dom';
import CreateAnnotationFormContainer from '../../annotations/annotation_create/create_annotation_container';
import ShowAnnotation from '../../annotations/annotation_show/annotation_show';

class TrackShow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quote: "",
         start_index: "",
         end_index: "",
         annotation_body: "",
         displayWholeAnnotation: null
      };

      this.lyrics = React.createRef();    // using React reference to snag lyrics object -- otherwise, cannot save object within tags to a variable
   
      this.clickHandler = this.clickHandler.bind(this);
      this.setAnnotation = this.setAnnotation.bind(this);
   }

   componentDidMount() {
      // debugger
      // p add_track_debugger
      // debugger waterfall for trackShow
      // debugger
      this.props.fetchTrack(this.props.match.params.trackId).then(()=> {
         this.props.fetchArtist(this.props.track.artist_id);
         this.props.fetchAlbum(this.props.track.album_id);
         // debugger
         this.props.fetchAnnotations();
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

   setAnnotation(annotation){
      // debugger
      this.setState({ displayWholeAnnotation: annotation});
   }


   clickHandler(e) {    // create new function that receives event
      // debugger
      console.log(window.getSelection());

      // debugger
      this.setState({
         start_index: window.getSelection().anchorOffset,
         end_index: window.getSelection().focusOffset,
         quote: window.getSelection().toString(),
         // displayWholeAnnotation: null
      })

      // toggling either create annotation OR show annotation
      // the quote has annotation-highlighted class.
      // no matter where the click is, is e.target
      // if the e.target doesn't have the quote's class list, it means
      // the user clicked on something else
      if (!e.target.classList.contains('annotation-highlighted')) {
         this.setState({displayWholeAnnotation: null});
      }

      // debugger

      // return thisIsTheState;

      // const start_index = window.getSelection().anchorOffset;
      // const end_index = window.getSelection().focusOffset;
      // const quote = window.getSelection().toString();
      // console.log(start_index);
      // console.log(end_index);
      // console.log(quote);      
   }

   render() {    //need to put in a render, otherwise you're just returning in a class   
   // debugger
   //  debugger is where you can look at what props is

   // const { track } = this.props;
   // const trackId = track ? track.id : null
   // const trackTitle = track ? track.title : null
   // const trackLyrics = track ? track.lyrics : null

   const { track, artist, album, annotations_array } = this.props;    //refactoring to be drier
   if (!track) {
      return <div>Loading...</div>;
   }
   // debugger
// debugging for add-and-create-track

// PICK UP HERE TOMORROW
      // const annotation_bodies = annotations_array.map((annotation) => {
      //    return (
      //       <AnnotationShowItem
      //          key={annotation.id}
      //          annotation={annotation.annotation_body}
      //          deleteAnnotation={this.props.deleteAnnotation}
      //       />
      //    )
      // })

      const logged_in_edit_track_button = this.props.currentUser ? <Link to={`/tracks/${track.id}/edit`} className="edit-button">Edit Poem</Link> : null
// HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE // HERE 

      let annotationsForOneTrack = [];

      // do one first loop-through and check which indices need a special format
      // pulling all annotations for this particular page
      // debugger
      annotations_array.map((annotation) => {
         if (annotation.track_id === this.props.track.id) {
            annotationsForOneTrack.push(annotation);
         }
         return annotationsForOneTrack;
      })

      // quick-sorting through this page's annotations in start_index order
      // bootstrapped onto the array class so added it permanently as long as the component exists
      Array.prototype.quickSort = function (comparator) {
         if (this.length <= 1) {
            return this;
         };

         if (typeof comparator !== "function") {
            comparator = (x, y) => {
               if (x === y) {
                  return 0;
               } else if (x < y) {
                  return -1;
               } else {
                  return 1;
               }
            }
         }

         const pivot = this[0];
         const smallArr = [];
         const bigArr = [];

         for (let i = 1; i < this.length; i++) {
            if (comparator(this[i].start_index, pivot.start_index) === -1) {
               smallArr.push(this[i]);
            } else {
               bigArr.push(this[i]);
            }
         }

         return smallArr.quickSort(comparator).concat([pivot]).concat(bigArr.quickSort(comparator));
      }

      annotationsForOneTrack = annotationsForOneTrack.quickSort();
      console.log(annotationsForOneTrack);

      // let annotation_bodies = annotationsForOneTrack.map(annotation => {
      //    console.log(annotation.annotation_body);
      //    return (
      //       <p 
      //          key={annotation.id}
      //          className="highlightOnHover"
      //          // onClick = {this.displayWholeAnnotation}
      //          >{annotation.quote}
      //       </p>
      //    );
      // })
      
      
      // let giveTagsToAnnotations = null;
      // annotationsForOneTrack.forEach((annotation) => {
      //    const before = track.lyrics.slice(0, annotation.start_index)                     // in order to render all the material pre-annotation
      //    const after = track.lyrics.slice(annotation.end_index, track.lyrics.length - 1)  // in order to render all the material post-annotation
      //    // const prevEndIndex = annotation.end_index;
      //    debugger
      //    // track.lyrics = (
      //    //    <>
      //    //       {before}
      //    //       <span className="annotation-highlighted">{annotation.quote}</span>
      //    //       {after}
      //    //    </>
      //    // );

      //    // return (
      //       // need a parent element to wrap everything, in order to export three separate things
      //    giveTagsToAnnotations = 
      //       <>
      //       {before}
      //       <span className="annotation-highlighted">{annotation.quote}</span>
      //       {after}
      //       </>;
      //    // )
      // });






      // 1. <p> track.lyrics </p>
      // 2. go into track.lyrics. every time there's an annotation, put: 
      //    </p> <span>annotation</span> <p>


      //       html_safe
      //       escape_html





// build an array of jsx objects stacked on top of each other; they will render in order!
      let stellaAnnotation = [];
      let previousStep = 0;
      let j=0;

      for (let i = 0; i < annotationsForOneTrack.length; i++){


         let startAnnotationHere = annotationsForOneTrack[i].start_index;
         let endAnnotationHere = annotationsForOneTrack[i].end_index;
         let annotation = annotationsForOneTrack[i];

         let before = track.lyrics.slice(previousStep, startAnnotationHere);

         stellaAnnotation.push(
            <span key={j++}>
               {before}
            </span>
         );

         {/* create a separate state just for TrackShow */}
         stellaAnnotation.push(
               <a key={j++}
                  onClick={() => {
                     this.setAnnotation(annotationsForOneTrack[i])
                  }}
               className="annotation-highlighted"
               >
               {/* annotation.quote is highlighted and already annotated */}
               {annotation.quote}
               </a>
         )
         
         previousStep = endAnnotationHere;   

         if (i === annotationsForOneTrack.length - 1) {
            stellaAnnotation.push(
               <p key={j++}>
                  {track.lyrics.slice(previousStep, track.lyrics.length - 1)}
               </p>
            )
         }
      }
      




      const displayWholeAnnotation = this.state.displayWholeAnnotation ? 
               <ShowAnnotation 
                  annotation={this.state.displayWholeAnnotation} 
                  annotator={this.props.annotator}
               /> : null;










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

            {/* iterate through the lyrics and add spans where the start_index and end_index are */}            

            {/* ternary: if there are no annotations, render track lyrics complete */}
            {/* track lyrics component */}
            <h2 className="lyrics-and-annotations">
                  {(annotationsForOneTrack.length !== 0) ?
                     <div className="track-lyrics" ref={this.lyrics}
                        onClick={this.clickHandler}
                        // onMouseDown={this.clickHandler}
                        onMouseUp={this.clickHandler}
                     >
                        {stellaAnnotation}
                        {/* {giveTagsToAnnotations} */}
                        {/* <p>{track.lyrics}</p> */}
                        {/* {annotation_bodies} */}
                     </div>
                     : <div className="track-lyrics" ref={this.lyrics}
                        onClick={this.clickHandler}
                        // onMouseDown={this.clickHandler}
                        onMouseUp={this.clickHandler}
                     >{track.lyrics}
                     </div>
                  }

                  <div className="show-annotation-container">
                     {displayWholeAnnotation}
                  </div>



                  {/* create annotation component */}
                  {(this.state.quote.length != 0) ? <CreateAnnotationFormContainer
                     track={this.props.track}
                     annotator={this.props.currentUser}
                     start_index={this.state.start_index}
                     end_index={this.state.end_index}
                     quote={this.state.quote}
                  />
                     : null}
            </h2>
            <br></br>
            <Link to="/" className="submit-button">Back to Homepage</Link>

            </div>
         </div>
      );
   }
}

export default TrackShow;