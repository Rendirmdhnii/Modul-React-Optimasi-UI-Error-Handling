import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, simulateError }) {
  console.log("ProductList render");

  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <h3>Produk tidak ditemukan</h3>
        <p>Coba ubah filter atau sorting produk.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          simulateError={simulateError}
        />
      ))}
    </div>
  );
}

export default React.memo(ProductList);