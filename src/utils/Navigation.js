import {
    HiOutlineHome,
    HiOutlineViewGrid,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineBookOpen,
  } from "react-icons/hi";
  
  export const navigation = [
    { to: "/", icon:() => <HiOutlineHome />, name: "Home" },
    { to: "/products", icon:() => <HiOutlineViewGrid />, name: "products" },
    { to: "/cart", icon:() => <HiOutlineShoppingCart />, name: "Cart" },
    { to: "/news", icon:() => <HiOutlineBookOpen />, name: "News" },
    { to: "/profile", icon:() => <HiOutlineUser />, name: "Profile" },
  ];