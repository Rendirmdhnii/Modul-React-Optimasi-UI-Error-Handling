import { useCallback, useEffect, useState } from "react";

const NORMAL_API_URL = "https://fakestoreapi.com/products";
const ERROR_API_URL = "https://fakestoreapi.com/products-salah-404";

export const useProducts = (simulateNetworkError = false) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const url = simulateNetworkError ? ERROR_API_URL : NORMAL_API_URL;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - Gagal mengambil data produk`);
      }

      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setProducts([]);
      setError(err.message || "Terjadi kesalahan saat mengambil data");
    } finally {
      setLoading(false);
    }
  }, [simulateNetworkError]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    retry: fetchProducts,
  };
};