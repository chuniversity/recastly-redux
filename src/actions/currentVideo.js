var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

// const addNewMessageActionCreator = ({ userName, text }) => ({
//   type: "ADD_MESSAGE",
//   payload: { userName, text }
// });

export default changeVideo;
