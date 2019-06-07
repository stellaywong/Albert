import React from 'react';
import { Link } from 'react-router-dom';
import AnnotationShowItem from './annotation_show_item.jsx';    //debug: explicit file format if you correct the name later
//it's a class component, ergo, don't import with curly brackets -- only if it has multiple exports (like action creators)

class AnnotationShow extends React.Component {
    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        const { tracks } = this.props; //destructure props here
        // debugger

        const allTracks = tracks.map((track) => {
            return <AnnotationShowItem
                track={track}
                key={track.id}          //to make each one unique
            />
        })

        return (
            <div>
                <h1 className="index-item-header">Trending on Rhymestein</h1>
                <div className="top-tracks-index-item-container">
                    {allTracks}
                </div>
            </div>
        );
    }
}

export default AnnotationShow;