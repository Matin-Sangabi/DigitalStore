import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/Homepage";
import "./App.css";
import ProductsPage from "./pages/products";
import ProductsProvider from "./provider/productsProvider";
import { Fragment } from "react";
import ProductPage from "./pages/product";
import CartProvider from "./provider/cartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import AuthProvider from "./provider/AuthProvider";
import Profile from "./pages/profile";
import CheckoutPage from "./pages/checkoutPage";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <ProductsProvider>
          <ToastContainer/>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
