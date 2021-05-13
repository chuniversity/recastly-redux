import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//{key, query, max = 5}, callback

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // two dispatches. one for video. one for videolis


  return function thunk(dispatch) {

    // return (dispatch) => {
    //   return searchYouTube(YOUTUBE_API_KEY, q, max = 5)
    // };

    return $.get('https://www.googleapis.com/youtube/v3/search', (data) => {
      dispatch({ type: 'VIDEO_SEARCH', payload: data });

    //
    // dispatch(changeVideo(data[0]));
    // dispatch(changeVideoList(data));


  });
};

};

// const addNewMessageActionCreator = ({ userName, text }) => ({
//   type: "ADD_MESSAGE",
//   payload: { userName, text }
// });

export default handleVideoSearch;
