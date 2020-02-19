import React from "react";
import "./CategoryP.css"


function preview() {
	return (
		<div className='container'>
			<h1 className="col-md-12 text-center">SHOP NOW</h1>
			<div className='d-flex categoryPreview'>
				<div className='card col-5  col-sm-3  preview my-4 mr-2' id="Beauty">
					Preview 1
				</div>
				<div className='card col-5 col-sm-3 preview my-4 mx-2' id="Food">
					Preview 2
				</div>
				<div className='card col-5  col-sm-3 preview my-4 mx-2' id="Oils">
					Preview 3
				</div>
				<div className='col-5 col-sm-3  preview my-4' >
					<div className='d-flex flex-column'>
						<div className=' card  previewh  mb-2' id="Tea">Tea</div>
						<div className='card  previewh  mt-2' id="Remedies">Remedies</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default preview;
