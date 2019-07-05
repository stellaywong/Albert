import React from 'react';

class Youtube extends React.Component {

    constructor (props) {
        super(props)
        // this.firstScriptTag = document.getElementsByTagName('script')[0];
        this.stopVideo = this.stopVideo.bind(this);                     // for HTML and regular javascript, these commands play and stop the viddeo
                                                                        // but with React we use createRef ?
        this.onPlayerReady = this.onPlayerReady.bind(this);             // for HTML and regular javascript, these commands play and stop the viddeo
                                                                        // but with React we use createRef ?
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this); // for HTML and regular javascript, these commands play and stop the viddeo
                                                                        // but with React we use createRef ?
        this.player = null;
    }
    
    componentDidMount() {
        // this.tag = document.createElement('script');
        // this.tag.src = "https://www.youtube.com/iframe_api";
        // this.firstScriptTag.parentNode.insertBefore(this.tag, this.firstScriptTag);
        this.onYoutubeIframeAPIReady();         // invoke this method
    }

    onYoutubeIframeAPIReady() {
        this.player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': this.onPlayerReady,
                'onStateChange': this.onPlayerStateChange
            }
        });
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

    onPlayerStateChange(event) {
        var done = false; 
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(this.stopVideo, 6000);
            done = true;
        }
    }

     stopVideo() {
        this.player.stopVideo();
     }

    

    render() { 
        return <div id="player">abcdefg</div>
        // this single element gets rendered on the initial render, 
        // but the javascript runs later and
        // injects the youtube video into it
        // the difficulty here is that the site code works in html
        // but here we are working in jsx
        
        //         {/* < !--1. The<iframe>(and video player) will replace this < div > tag. -- ></div> */}

        // {/* <script> */}
        //    {/* // 2. This code loads the IFrame Player API code asynchronously. */}
        // {/* //     // var tag = document.createElement('script'); */}

        // {/* //     // tag.src = "https://www.youtube.com/iframe_api"; */}

        // {/* //     {/* // 3. This function creates an <iframe> (and YouTube player) */}
        // {/* //     //    after the API code downloads. */}
        // {/* //     var player; */}
    
        //    {/* // 4. The API will call this function when the video player is ready. */}
        // {/* //     function onPlayerReady(event) { */}
        // {/* //             event.target.playVideo(); */}
        
    
        //         {/* // 5. The API calls this function when the player's state changes.
        // //         //    The function indicates that when playing a video (state=1),
        // //         //    the player should play for six seconds and then stop. */}
        //         {/* var done = false; */}
        //      {/* function onPlayerStateChange(event) { */}
        //          {/* if (event.data == YT.PlayerState.PLAYING && !done) { */}
        //              {/* setTimeout(stopVideo, 6000); */}
        //          {/* done = true; */}
        //      {/* } */}
        //  {/* } */}
        //      {/* function stopVideo() { */}
        //             {/* //  player.stopVideo(); */}
        //         {/* //  } */}
        //  {/* </script> */}
            

    }
}

export default Youtube;