import React from 'react';
import { Link } from 'react-router-dom';
import CreateAnnotationFormContainer from '../../annotations/annotation_create/create_annotation_container';
import ShowAnnotation from '../../annotations/annotation_show/annotation_show';
import Youtube from './youtube';

class TrackShow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quote: "",
         start_index: "",
         end_index: "",
         annotation_body: "",
         displayWholeAnnotation: null,
         displayAnnotator: null
      };

      this.lyrics = React.createRef();    // using React reference to snag lyrics object -- otherwise, cannot save object within tags to a variable
   
      this.clickHandler = this.clickHandler.bind(this);
      this.setAnnotation = this.setAnnotation.bind(this);
      this.clearAnnotation = this.clearAnnotation.bind(this);
   }

   componentDidMount() {
      // p add_track_debugger
      // debugger waterfall for trackShow
      this.props.fetchTrack(this.props.match.params.trackId).then(()=> {
         this.props.fetchArtist(this.props.track.artist_id);
         this.props.fetchAlbum(this.props.track.album_id);
         // debugger
         this.props.fetchAnnotations(this.props.match.params.trackId);
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

   clickHandler(e) {    // create new function that receives event
      // debugger
      console.log(window.getSelection());

      // to know which object we're currently looking at
      let currentSection = parseInt(e.target.dataset.offset);

      // debugger
      this.setState({      //allows the user to click down and release mouse to create annotation
         start_index: window.getSelection().anchorOffset + currentSection,
         end_index: window.getSelection().focusOffset + currentSection,
         quote: window.getSelection().toString(),
         // displayWholeAnnotation: "blank",
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
   // debugger is where you can look at what props is


   const { track, artist, album, annotations_array } = this.props;    //refactoring to be drier
   if (!track) {
      return <div>Loading...</div>;
   }
   // debugging for add-and-create-track

      const logged_in_edit_track_button = this.props.currentUser ? <Link to={`/tracks/${track.id}/edit`} className="edit-button">Edit Poem</Link> : null

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

      // 1. <p> track.lyrics </p>
      // 2. go into track.lyrics. every time there's an annotation, put: 
      //    </p> <span>annotation</span> <p>

      //    html_safe so the annotation can't be annotated over, in an overlap
      
      // build an array of jsx objects stacked on top of each other; they will render in order!
      let stellaAnnotation = [];
      let previousStep = 0;
      let j=0;

      // for (const annotation of annotationForOneTrack) -- suggestion

      for (let i = 0; i < annotationsForOneTrack.length; i++){

         let startAnnotationHere = Math.min(annotationsForOneTrack[i].start_index, annotationsForOneTrack[i].end_index);
         let endAnnotationHere = Math.max(annotationsForOneTrack[i].start_index, annotationsForOneTrack[i].end_index);
         let annotation = annotationsForOneTrack[i];

         let before = track.lyrics.slice(previousStep, startAnnotationHere);
         // debugger
         stellaAnnotation.push(
            <span data-offset={previousStep}>
               {before}
               {/* before could use a key */}
            </span>
         );

         {/* create a separate state just for TrackShow */}
         stellaAnnotation.push(
               <a key={j++}
                  unselectable = "on"
                  onClick={() => {
                     this.setAnnotation(annotationsForOneTrack[i], 
                                       this.props.annotators[annotation.annotator_id]) //here we indexing into the annotators object (created in the container)
                                                                                       // by the annotator id we took from the annotation
                  }}
               className="annotation-highlighted"
               >
               {/* annotation.quote is highlighted and already annotated */}
               {annotation.quote}
               </a>
         )
         
         previousStep = endAnnotationHere;   

         // could use a key
         if (i === annotationsForOneTrack.length - 1) {
            stellaAnnotation.push(
               <span data-offset={previousStep}>{track.lyrics.slice(previousStep, track.lyrics.length)}</span>
               // <p key={j++}>
                  // {track.lyrics.slice(previousStep, track.lyrics.length)}
                  // {/* slice up to, but not including, the second argument */}
               // </p>
            )
         }
         console.log(stellaAnnotation)
      }

      let sidebarStuff = null;
         // display the annotation, if we click on an annotated quote
         if (this.state.displayWholeAnnotation ) {
            sidebarStuff = <ShowAnnotation
               // the annotation body of the annotation
               annotation={this.state.displayWholeAnnotation}
               // the username of the annotator
               annotator={this.state.displayAnnotator}
            />
         } 
         // if there is something clicked, render create annotation form component
         else if (this.state.quote.length != 0) {
            sidebarStuff = <CreateAnnotationFormContainer
            track={this.props.track}
            annotator={this.props.currentUser}
            start_index={this.state.start_index}
            end_index={this.state.end_index}
            quote={this.state.quote}
            clearAnnotation={this.clearAnnotation}
            />
         } 
         // if the poem has no annotations, or the user has not yet tried to make one,
         // the audio/video recording of the poem is available.
         // if the uploading user didn't add a youtube link for a recording, don't render the video player (because it'll show a broken link)
         // if this conditional goes first, the condition is checked before the others, and nothing else will happen.
         // so the other things can get checked first.
         else if (track.youtube_url !== null && track.youtube_url !== undefined) {
            sidebarStuff = 
            <div className="youtube-api-box">
               <label className="screenreader-only">Play a Recording of the Poem Button</label>
               <p>POEM RECORDING: <br></br> </p>
               <Youtube videoId={track.youtube_url} />
            </div>
            ;
         }
      
      const borderStyle = this.state.displayWholeAnnotation || this.state.quote ? ({ borderLeft: '3.75px solid rgb(153, 167, 238)', }) : ({ border: 'none', })

      const arrowStyle = this.state.displayWholeAnnotation || this.state.quote ? ({ display: 'block', }) : ({ display: 'none', }) 

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
                  {(annotationsForOneTrack.length !== 0) ?
                     <div className="track-lyrics" ref={this.lyrics}
                        // onClick={this.clickHandler}
                        // onMouseDown={this.clickHandler}
                        // onMouseUp={this.clickHandler}
                     >

                        {/* {this.state.displayWholeAnnotation === null ? (Youtube) : (<div className="show-annotation-container" style={borderStyle}>
                           <div className="purple-arrow" style={arrowStyle}>
                              <svg src="left_arrow.svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.87 21.32">
                                 <path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
                              </svg>
                           </div>

                        </div>)} */}

                        <p onMouseUp={this.clickHandler} data-offset={previousStep}>
                           {stellaAnnotation}
                        </p>
                     </div>
                     : <div className="track-lyrics" ref={this.lyrics}
                        // onClick={this.clickHandler}
                        // onMouseDown={this.clickHandler}
                        // onMouseUp={this.clickHandler}
                     ><p onMouseUp={this.clickHandler} data-offset={0}>{track.lyrics}</p>
                     </div>
                  }

                  <div className="show-annotation-form">
                     {sidebarStuff}
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