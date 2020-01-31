import React from "react";
import "./ProductP.css";

function Preview() {
	return (
		<div className='container'>
			<div className='my-4'>
				<h3 className='text-center'>Header 1</h3>
				<div className='d-flex flex-row products'>
					<div className='col-12 col-sm-12 col-md-6'>
						<div className='col-md-12 d-flex flex-row px-0'>
							<div className='card col-md-6 productP mr-2' id="product">
								Product 1
							</div>
							<div className='card col-md-6 productP ml-2' id="product1">
								Product 2
							</div>
						</div>
						<div className='card col-md-12 mt-2 productP' id="product2">
							Product 3
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6'>
						<div className=' card col-md-12 productP mb-2' id="product3">
							Product 4
						</div>
						<div className='col-md-12 d-flex flex-row px-0 mt-2'>
							<div className='card col-md-6 productP mr-2' id="product4">
								Product 5
							</div>
							<div className='card col-md-6 productP ml-2' id="product5">
								Product 6
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Preview;
