import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { clearSearchResults, fetchSearchResults } from '../../actions/search_actions';

class SearchBarAndResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            myDebounce: this.myDebounce(250)
        };

        this.handleChange = this.handleChange.bind(this);
        this.myDebounce = this.myDebounce.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    // componentWillUnmount() {
    //     this.setState({ input: "" });
    //         this.props.clearSearchResults();
    // }

    handleChange(e){
        // if (search == "") {
        //     props.clearSearchResults();
        // } else {
        //     this.state.myDebounce(search);
        // }
        // asynchronous action
        // with a callback that happens right after the input
        this.setState({ input: e.target.value }, () => {
            this.state.myDebounce(this.state.input);
        });

    }

    // going to another page makes the search results go away
    // this is a failsafe, because technically, the onClick includes clicking one of the poem links itself
    clearInput() {  
        this.setState({ input: "" });
        this.props.clearSearchResults();
    }


    myDebounce(interval) {
        let timeout;

        return (argument) => {
            const functionCall = () => {
                timeout = null;
                // if it's an empty string, clear the search results
                // else, search for the track title
                if (argument == "") {
                    this.props.clearSearchResults();    
                } else {
                    this.props.fetchSearchResults(argument);
                }
                // console.log(argument);
            }

            clearTimeout(timeout);
            timeout = setTimeout(functionCall, interval);
        }
    }

    render() {
        // destructuring this.props' searchResults
        const { searchResultArray } = this.props;

        let displayResults = null;

        

        // if you're a fast typer, send a search to the backend if there's a 1-second pause
        

        // if there exist searchResultArray, then save each searchResult as a list element
        // otherwise, do nothing

        if (searchResultArray) {
            // wrap everything into a variable called "displayList"
            let displayList = searchResultArray.map((searchResult) => {

                {/* // custom string shortener; check if the string is more than 10 characters, */ }
                {/* // cut it at 10 and replace the last letters in the string with "..." */ }
                let titleShortener = (searchResult.title.length > 30) ? (
                    (searchResult.title.slice(0, 31) + "...")
                ) : (
                    (searchResult.title)
                ) 
                
                // visually rendered on the page -- constructing each list element
                return (
                    <Link to={`/tracks/${searchResult.id}`} key={searchResult.id} onClick={this.clearInput} className="search-result-text">
                        <img src={searchResult.photoUrl} className="top-tracks-index-item-image" />
                        <div className="search-text-wrap">
                            <span className="search-title">{titleShortener}</span>
                            <span className="search-artist">{searchResult.artist_name}</span>
                        </div>
                    </Link>
                )
            });

            // rendering the entire variable "displayList"
            displayResults = <ul className="search-results"> {displayList} </ul>

        
        } else {
            displayResults = {};
        }

        return (
            <>
                <input
                    placeholder="Search poems and more"
                    onChange={this.handleChange}
                    className="search-bar-input-field"
                ></input>
                <div className="search-wrap">
                    {displayResults}
                </div>
            </>
        )
    }
}

// props needs to receive the searchResultArray
const mapStateToProps = (state) => {
    return {
        searchResultArray: Object.values(state.search)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearchResults: () => dispatch(clearSearchResults()),
        fetchSearchResults: (input) => dispatch(fetchSearchResults(input))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarAndResults));