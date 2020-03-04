import React, { Component } from "react";
import { connect } from 'react-redux';
import  ProductDetail  from "../../components/ProductsDetail"
import ShopNavbar from "../../components/ShopNavbar";
import Products from "../../components/Products";
import ShopHeader from "./ShopHeader";

class index extends Component {

  //  componentDidMount() {
  //   console.log(this.props.match.params.id)

  // }
  render() {
    const { productId } = this.props
    return (
      <div>
        {
          this.props.match.params.id ? (
            <ProductDetail productId={this.props.match.params.id} />
          ) : (
      <div>
        <ShopNavbar />
        <ShopHeader />
        <Products />
      </div>

          )
        }

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.id)
    return {
      productId : ownProps.match.params.id
    }
};

export default connect(mapStateToProps )(index);
