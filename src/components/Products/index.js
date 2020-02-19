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
      // <div className="container-fluid">
      //   {this.props.products.map(product => (
      //     <div className="card product col-sm-12 col-md-4" key={product.index}>
      //       <div className="card-header">{product.name}</div>
      //       <div className="card-body">{product.image}</div>
      //       {/* <div className="card-footer">
      //                   <p>productname</p>
      //           </div> */}
      //     </div>
      //   ))}
      // </div>
        <Products products={this.props.products}/>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(index);
