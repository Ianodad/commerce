import React from 'react'
import { Link } from 'react-router-dom';

function Products({products}) {
  return (
   <div className="container px-sm-1 py-5 mx-auto product">
    <div className="row">
      <div className="d-flex flex-wrap">
       {products.map((product, key) => {
         return (
        <div className="card card-1">
          <div className="pr-3 row justify-content-end">
            <div className="fa fa-heart-o like" />
          </div>
          <div className="product-pic"> <img className="pic1" src="https://i.imgur.com/fP3NOTX.png" /> </div> <small className="category">Backpacks</small>
          <h5 className="product-name">{product.name}</h5>
          <div className="row px-3 justify-content-between">
            <p className="price">{product.price}<span className="sm-text">50</span></p>
            <Link to={`/shop/${product.index}`} type="button" class="btn btn-primary"> Basic</Link>
            <button type="button" class="btn btn-warning">Add To Cart</button>
            <div className="stars"> <span className="fa fa-star star-active" /> <span className="fa fa-star star-active" /> <span className="fa fa-star star-active" /> <span className="fa fa-star-o" /> <span className="fa fa-star-o" /> </div>
          </div>
        </div>
       )})}
      </div>
    </div>
  </div>
  )
}

export default Products;