import React, { Component } from "react";
import Products from "./Products";
import "./Products.css";

import { connect } from "react-redux";
import Pagination from "../common/Pagination";
import { paginate } from "../../_helpers/Paginate";

import { productActions, cartActions} from "../../_actions";

const { fetchProducts, setCurrentPage, } = productActions
const { addToCart, initiateCart } = cartActions
class index extends Component {
  componentDidMount = async () => {
    await this.props.fetchProducts();
    console.log(await this.props.initiateCart());
  };

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
  };

  addToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    const {
      pageSize,
      currentPage,
      currentCategory,
      products: allProducts,
    } = this.props;

    // if s

    let products = allProducts;

    if (currentCategory != "All") {
      products = allProducts.filter(
        (product) => product.category === currentCategory
      );
    }

    const { length: count } = products;

    const selectProducts = paginate(products, currentPage, pageSize);
    if (count === 0) return <p> There are no products on display</p>;

    return (
      <div className="container-fluid">
        <Products products={selectProducts} onAddToCart={this.addToCart} />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    currentCategory: state.category.currentCategory,
    currentPage: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  setCurrentPage,
  addToCart,
  initiateCart,
})(index);
