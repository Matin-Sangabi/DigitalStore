import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/checkoutPage";
import HomePage from "./pages/Homepage";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/product";
import ProductsPage from "./pages/products";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";

const routes = [
    {path :'/'  , element : <HomePage />},
    {path :'/cart'  , element : <CartPage/> },
    {path :'/products'  , element : <ProductsPage/>},
    {path :'/product/:id'  , element : <ProductPage/>},
    {path :'/login'  , element : <Login/>},
    {path :'/signIn'  , element : <SignIn/>},
    {path :'/profile'  , element : <Profile/>},
    {path :'/checkout'  , element : <CheckoutPage/>},
    {path :'/*'  , element : <NotFound/>},
];
export default routes;