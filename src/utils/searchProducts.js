export function searchProducts (products , e) {
    return products.filter((p) =>
    p.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
}