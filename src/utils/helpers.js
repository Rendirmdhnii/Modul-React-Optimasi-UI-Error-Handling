export const expensiveCalculation = (products, filter, sort) => {
  console.log("⚠️ Komputasi berat berjalan...");

  let dummy = 0;
  for (let i = 0; i < 5000000; i += 1) {
    dummy += i % 10;
  }

  if (dummy < 0) {
    console.log(dummy);
  }

  let result = [...products];

  if (filter === "expensive") {
    result = result.filter((product) => product.price > 100);
  }

  if (filter === "cheap") {
    result = result.filter((product) => product.price <= 100);
  }

  if (sort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "title-asc") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const shortenText = (text, maxLength = 80) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};