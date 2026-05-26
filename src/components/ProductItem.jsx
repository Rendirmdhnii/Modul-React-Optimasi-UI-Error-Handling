import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import { formatPrice, shortenText } from "../utils/helpers";

function ProductItem({ product, simulateError }) {
  console.log(`ProductItem ${product.id} render`);

  const [showDetail, setShowDetail] = useState(false);

  if (simulateError && product.price > 200) {
    throw new Error("Simulasi error untuk produk mahal!");
  }

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-content">
        <span className="category">{product.category}</span>

        <h3>{shortenText(product.title, 45)}</h3>

        <p className="product-description">
          {shortenText(product.description, 90)}
        </p>

        <div className="product-footer">
          <strong>{formatPrice(product.price)}</strong>

          <button
            className="btn small"
            onClick={() => setShowDetail((prev) => !prev)}
          >
            {showDetail ? "Tutup Detail" : "Lihat Detail"}
          </button>
        </div>

        {showDetail && <ProductDetail productId={product.id} />}
      </div>
    </article>
  );
}

export default React.memo(ProductItem);