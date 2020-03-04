import React, { Component } from 'react'
import Detail from './Detail';
import { connect } from 'react-redux';
import { fetchProduct } from "../../actions";


export class index extends Component {


    componentDidMount () {
        console.log(this.props.productId)
            this.props.fetchProduct(this.props.productId)
    }

    render() {
        const { product } =this.props
        return (
            <div>
                <Detail product={product}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.product[ownProps.productId] };
};

export default connect(
  mapStateToProps, {fetchProduct}
)(index);