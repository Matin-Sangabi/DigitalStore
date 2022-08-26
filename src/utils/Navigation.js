import {
    HiOutlineHome,
    HiOutlineViewGrid,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineBookOpen,
  } from "react-icons/hi";
  
  export const navigation = [
    { to: "/", icon:() => <HiOutlineHome />, name: "Home" },
    { to: "/categories", icon:() => <HiOutlineViewGrid />, name: "Categories" },
    { to: "/cart", icon:() => <HiOutlineShoppingCart />, name: "Cart" },
    { to: "/news", icon:() => <HiOutlineBookOpen />, name: "News" },
    { to: "/profile", icon:() => <HiOutlineUser />, name: "Profile" },
  ];