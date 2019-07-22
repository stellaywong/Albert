import React from 'react';

class TrackShowLyrics extends React.Component {

    render() {      // empty parentheses invokes the render function

        const { track, annotationsForOneTrack, mouseUpHandler, mouseDownHandler, setAnnotation} = this.props;       // deconstruct the object; inside this.props, we have a track. we're grabbing these things from track, and assigning to a new variable called track, used here.

        
        // 1. <p> track.lyrics </p>
        // 2. go into track.lyrics. every time there's an annotation, put: 
        //    </p> <span>annotation</span> <p>

        //    html_safe so the annotation can't be annotated over, in an overlap

        // build an array of jsx objects stacked on top of each other; they will render in order!
        let lyricsAnnotatedAndAnnotatable = [];
        let previousStep = 0;
        let j = 0;

        // for (const annotation of annotationForOneTrack) -- suggestion

        for (let i = 0; i < annotationsForOneTrack.length; i++) {

            let startAnnotationHere = Math.min(annotationsForOneTrack[i].start_index, annotationsForOneTrack[i].end_index);
            let endAnnotationHere = Math.max(annotationsForOneTrack[i].start_index, annotationsForOneTrack[i].end_index);
            let annotation = annotationsForOneTrack[i];

            let before = track.lyrics.slice(previousStep, startAnnotationHere);
            // debugger
            lyricsAnnotatedAndAnnotatable.push(
                <span data-offset={previousStep} key={j++}>
                    {before}
                    {/* before could use a key */}
                </span>
            );

            {/* create a separate state just for TrackShow */ }
            lyricsAnnotatedAndAnnotatable.push(
                <a key={j++}
                    unselectable="on"
                    onClick={() => {
                        setAnnotation(annotationsForOneTrack[i],
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

            // j is the unique key
            if (i === annotationsForOneTrack.length - 1) {
                lyricsAnnotatedAndAnnotatable.push(
                    <span data-offset={previousStep} key={j++}>{track.lyrics.slice(previousStep, track.lyrics.length)}</span>
                    // <p key={j++}>
                    // {track.lyrics.slice(previousStep, track.lyrics.length)}
                    // {/* slice up to, but not including, the second argument */}
                    // </p>
                )
            }
            // console.log(lyricsAnnotatedAndAnnotatable)
        }




        return (    // this is what we return
            // 1. grab the 
            //

            <>
                {(annotationsForOneTrack.length !== 0) ?
                    <div className="track-lyrics" ref={this.lyrics}>

                        {/* purple arrow -- set to the same y-coordinate as what has been clicked (find one in event listeners) */}
                        {/* {this.state.displayWholeAnnotation === null ? (Youtube) : (<div className="show-annotation-container" style={borderStyle}>
                           <div className="purple-arrow" style={arrowStyle}>
                              <svg src="left_arrow.svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.87 21.32">
                                 <path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
                              </svg>
                           </div>

                        </div>)} */}

                        <p onMouseUp={mouseUpHandler} onMouseDown={mouseDownHandler} data-offset={previousStep}>
                            {lyricsAnnotatedAndAnnotatable}
                        </p>
                    </div>
                    : <div className="track-lyrics" ref={this.lyrics}>
                        <p onMouseUp={mouseUpHandler} onMouseDown={mouseDownHandler} data-offset={0}>{track.lyrics}</p>
                    </div>
                }
            </>
        )
    }
};

export default TrackShowLyrics;