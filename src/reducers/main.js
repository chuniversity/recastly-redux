import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

// var rootReducer = () => {;
const rootReducer = combineReducers({
  //TODO: define the root reducer for this app

  //HINT: you'll need to combine the other two reducers in this
  //  app into a sinsgle reducer using the 'combineReducers' method
  //  listed above.
  currentVideo: currentVideoReducer,
  videoList: videoListReducer
});

export default rootReducer;
