import React from "react";
import Header from "../../components/Header";
import Features from "../../components/Features";
import CategoryPreview from "../../components/CategoryPreview";
import ProductPreview from "../../components/ProductPreview";

import { getCart } from "../../service/cartService"

function index() {
  getCart()
  return (
    <div className="">
      <Header />
      <section style={{ backgroundColor: "grey" }}>
        <CategoryPreview />
      </section>
      <section>
        <ProductPreview />
      </section>
      <section style={{ height: "200px" }}>
        <Features />
      </section>
    </div>
  );
}

export default index;
