import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsProvider from "./provider/productsProvider";
import { Fragment, useEffect } from "react";
import CartProvider from "./provider/cartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/AuthProvider";
import { usePleaseStay } from "react-use-please-stay";

import routes from "./routes";
const App = () => {
  usePleaseStay({
    titles: ["Don't go!", "We're sad!", "Come back!"],
    interval: 500,
    faviconURIs: [
      "https://img.icons8.com/color/48/000000/appointment-reminders--v1.png",
    ],
  });
  useEffect(() => {
    document.body.classList.add("scrollbar");
  }, []);
  return (
    <Fragment>
      <AuthProvider>
        <ProductsProvider>
          <ToastContainer />
          <CartProvider>
            <Routes>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
