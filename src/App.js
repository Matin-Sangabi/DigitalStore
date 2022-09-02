import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/Homepage";
import "./App.css";
import ProductsPage from "./pages/products";
import ProductsProvider from "./provider/productsProvider";
import { Fragment } from "react";
const App = () => {
  return (
    <Fragment>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </ProductsProvider>
    </Fragment>
  );
};

export default App;
