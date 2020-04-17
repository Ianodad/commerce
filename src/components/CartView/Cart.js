import React from 'react'



const  Cart = ({cart, deleteProduct}) => {
     

    //  var cartlength = cart.length
    return (
        <div className="pb-5 col-md-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              {/* Shopping cart table */}
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Subtotal</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   {cart.map(product=> {
                      return (
                      <tr>
                        <th scope="row" className="border-0">
                          <div className="p-2">
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width={70} className="img-fluid rounded shadow-sm" />
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{product.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block" onClick={() => deleteProduct(product.index)}>Delete</span>
                            </div>
                          </div>
                        </th>
                        <td className="border-0 align-middle"><strong>{product.price}</strong></td>
                        <td className="border-0 align-middle"><strong>{product.prices.quantity}</strong></td>
                        <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash" />{product.prices.subTotal}</a></td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {/* End */}
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Cart
