import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

const ListRow = props => {
  const { data, handler } = props;
  return (
    <div className="block">
      <img src={data.img} alt="movie-pic" />
      <div className="title">{data.title}</div>
      <button className="remove" onClick={handler}>Remove</button>
    </div>
  );
};

const RecommendationRow = props => {
  const { data, handler } = props;
  return (
    <div className="block">
      <img src={data.img} alt="movie-pic" />
      <div className="title">{data.title}</div>
      <button className="add" onClick={handler}>Add</button>
    </div>
  );
};

class App extends Component {
  removeHandler = item => {
    const { dispatch } = this.props;
    dispatch(actions.removeFilm(item));
  };

  addHandler = item => {
    const { dispatch } = this.props;
    dispatch(actions.addFilm(item));
  };

  render() {
    const { list, recommendations } = this.props;
    return (
      <div className="whole">
        <h1>Netflix</h1>
        <div className="show-grid">
          <h3>My List</h3>
          <div className="row">
            {list.map((ele, index) => (
              <ListRow data={ele} key={index} handler={() => this.removeHandler(ele)} />
            ))}
          </div>
          <h3>Recommendation</h3>
          <div className="row">
            {recommendations.map((ele, index) => (
              <RecommendationRow data={ele} key={index} handler={() => this.addHandler(ele)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.mylist,
    recommendations: state.recommendations
  };
};

export default connect(mapStateToProps)(App);
