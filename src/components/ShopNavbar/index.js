import React, { Component } from "react";
import Navbar from "./Navbar";

import {fetchCategories } from "../../actions";
import { connect } from "react-redux";


class index extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <Navbar categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, { fetchCategories })(index);
