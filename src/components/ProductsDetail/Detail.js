import React from 'react'

function Detail({product}) {
  if (!product)  return <div>No show</div>
  console.log(product)
  const { name, price, description  } = product
    return (
        <div className="card">
        <div className="row no-gutters">
          <aside className="col-sm-12 col-md-6">
            <article className="gallery-wrap">
              <div className="img-big-wrap" style={{width:"500px"}}>
                {/* <div> <a href="#"><img src="http://placehold.it/1080x1080" /></a></div> */}
              </div> 
            </article> 
          </aside>
          <main className="col-sm-12 col-md-6 border-left">
            <article className="content-body pl-4">
              <h2 className="title">{name}</h2>
              <div className="rating-wrap my-3">
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> 154 orders </small>
              </div> 
              <div className="mb-3">
                <var className="price h4">Ksh{price}</var>
                <span className="text-muted">/per kg</span>
              </div> 
              <p className="">{description}</p>
              <dl className="row">
                <dt className="col-sm-12">Product Description</dt>
                <dt className="col-sm-12">Product Info</dt>
                <dt className="col-sm-12">Ingredients</dt>
              </dl>
              <hr />
              <div className="form-row">
                {/* <div className="form-group col-md flex-grow-0">
                  <label>Quantity</label>
                  <div className="input-group mb-3 input-spinner">
                    <div className="input-group-prepend">
                      <button className="btn btn-light" type="button" id="button-plus"> + </button>
                    </div>
                    <input type="text" className="form-control" defaultValue={1} />
                    <div className="input-group-append">
                      <button className="btn btn-light" type="button" id="button-minus"> − </button>
                    </div>
                  </div>
                </div>  */}
                <div className="form-group col-md">
                  <label>Select size</label>
                  <div className="mt-1">
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" name="select_size" defaultChecked className="custom-control-input" />
                      <div className="custom-control-label">Small</div>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" name="select_size" className="custom-control-input" />
                      <div className="custom-control-label">Medium</div>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" name="select_size" className="custom-control-input" />
                      <div className="custom-control-label">Large</div>
                    </label>
                  </div>
                </div> 
              </div> 
              <a href="#" className="btn  btn-outline-primary"> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart" /></a>
            </article> 
          </main> 
        </div> 
      </div> 
    )
}

export default Detail
