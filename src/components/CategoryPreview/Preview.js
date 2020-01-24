import React from "react";

function preview() {
	return (
		<div className='container'>
			<div className='d-flex categoryPreview'>
			SHOP NOW
				<div className='card col-12  col-sm-3  preview my-4 mr-2'>
					Preview 1
				</div>
				<div className='card col-12  col-sm-3 preview my-4 mx-2'>
					Preview 2
				</div>
				<div className='card col-12  col-sm-3 preview my-4 mx-2'>
					Preview 3
				</div>
				<div className='col-12 col-sm-3  preview my-4'>
					<div className='d-flex flex-column'>
						<div className=' card  previewh  mb-2'>Others</div>
						<div className='card  previewh  mt-2'>More</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default preview;
