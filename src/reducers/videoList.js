import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  // type: 'CHANGE_VIDEO_LIST',
  // videos: videos
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;
    default: return state;
  }
};



export default videoListReducer;
