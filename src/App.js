import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/Homepage";
import "./App.css";
import ProductsPage from "./pages/products";
import ProductsProvider from "./provider/productsProvider";
import { Fragment } from "react";
import ProductPage from "./pages/product";
import CartProvider from "./provider/cartProvider";
const App = () => {
  return (
    <Fragment>
      <ProductsProvider>
        <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        </CartProvider>
      </ProductsProvider>
    </Fragment>
  );
};

export default App;
