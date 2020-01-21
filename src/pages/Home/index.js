import React from "react";
import Header from "../../components/Header/Index";
import Features from "../../components/Features";
import CategoryPreview from "../../components/CategoryPreview";
import ProductPreview from "../../components/ProductPreview";
function index() {
	return (
		<div className=''>
			<Header />
			<section style={{ backgroundColor: "grey" }}>
				<CategoryPreview />
			</section>
			<ProductPreview />
			<Features />
		</div>
	);
}

export default index;
