import {
    HiOutlineHome,
    HiOutlineViewGrid,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineBookOpen,
  } from "react-icons/hi";
import { useAuth } from "../provider/AuthProvider";
  
  export default function Navigation () {
    const Auth = useAuth();

    return([
      { to: "/", icon:() => <HiOutlineHome />, name: "Home" },
      { to: "/products", icon:() => <HiOutlineViewGrid />, name: "products" },
      { to: "/cart", icon:() => <HiOutlineShoppingCart />, name: "Cart" },
      { to: "/news", icon:() => <HiOutlineBookOpen />, name: "News" },
      { to: Auth ? '/profile' : '/login', icon:() => <HiOutlineUser />, name: Auth?"profile" : 'Login/SignIn' },
    ])
  }

