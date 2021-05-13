import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// console.log(thunk);


const store = createStore(
  rootReducer,
  { currentVideo: exampleVideoData[0], videoList: exampleVideoData },
  applyMiddleware(thunk)
  );

// { currentVideo: exampleVideoData[0], videos: exampleVideoData }
// https://redux.js.org/tutorials/fundamentals/part-4-store

export default store;
