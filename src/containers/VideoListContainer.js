import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// Conforming
// Notes from Redux Docs:
// The connect() function connects a React component to a Redux store

// concerned with getting videoList from state


// define mapStateToProps
const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

// define mapDispatchToProp
const mapDispatchToProps = (dispatch) => {
  return {
    // possible dispatch action to take
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video));
    }
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.





export default VideoListContainer;
