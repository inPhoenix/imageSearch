import React from "react";
import { connect } from "react-redux";
const App = (images) => {
  console.log(images);
  return <div className="App">Hello World</div>;
};

const mapStateToProps = state => {
  return {
    images: state
  };
};
export default connect(mapStateToProps)(App);
