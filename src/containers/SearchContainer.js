import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// Conforming
// The connect() function connects a React component to a Redux store

// SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Component)



// define mapStateToProps

var mapStateToProps = (state) => ({
  value: state.value
});

// define mapDispatchToPro
var mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (q) => {
      dispatch(handleVideoSearch(q));
    },
  };
};


var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


// function mapStateToProps(state, ownProps) {

// }




//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
