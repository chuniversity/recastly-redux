import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// define mapStateToProps
const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
};


// define mapDispatchToProps

// define container
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;

// MapStoreToState - values
//MapDispatch - actions to change the state