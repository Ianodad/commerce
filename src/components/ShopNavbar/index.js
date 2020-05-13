import React, { Component } from "react";
import Navbar from "./Navbar";

import { productActions } from "../../_actions";

import { connect } from "react-redux";

const { fetchCategories, setCategory } = productActions
class index extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  // componentWillReceiveProps(newProps) {
  //   console.log(props)
  // }
  handleCategorySelect = (category) => {
    console.log(category);
    this.props.setCategory(category);
  };

  render() {
    const { categories } = this.props;
    return (
      <div>
        <Navbar
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    currentCategory: state.currentCategory,
  };
};

export default connect(mapStateToProps, { fetchCategories, setCategory })(
  index
);
