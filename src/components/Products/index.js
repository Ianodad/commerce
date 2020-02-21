import React, { Component } from "react";
import Products from "./Products";
import "./Products.css";

import { fetchProducts } from "../../actions";
import { connect } from "react-redux";

class index extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
        <Products products={this.props.products}/>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(index);
