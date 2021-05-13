import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store/store.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
// // import handleSearchChange from '../actions/search.js'

//TODO: Import the Provider component from 'react-redux' here!
import { Provider } from 'react-redux';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
    {/* <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} /> */}
    <App />
  </Provider>,
  document.getElementById('app')
  // () => handleSearchChange('redux tutorials')(store.dispatch);
);


// Redux boilerplate from docs
/* ReactDOM.render(
    <Provider store ={store}>
    <Component />
    </Provider>,
    document.getElementById('app')
);
*/