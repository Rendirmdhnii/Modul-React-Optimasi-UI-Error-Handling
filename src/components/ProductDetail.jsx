import React, { useCallback, useEffect, useState } from "react";
import { shortenText } from "../utils/helpers";

function ProductDetail({ productId }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDetail = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - Detail gagal dimuat`);
      }

      const data = await response.json();
      setDetail(data);
    } catch (err) {
      setError(err.message || "Gagal memuat detail produk");
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (loading) {
    return <div className="detail-box">Loading detail...</div>;
  }

  if (error) {
    return (
      <div className="detail-box error-inline">
        <p>Gagal load detail: {error}</p>
        <button className="btn small" onClick={fetchDetail}>
          Retry
        </button>
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div className="detail-box">
      <strong>Detail Produk:</strong>
      <p>{shortenText(detail.description, 130)}</p>
    </div>
  );
}

export default ProductDetail;