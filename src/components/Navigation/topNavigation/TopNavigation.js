import { Link, NavLink } from "react-router-dom";
import  Navigation  from "../../../utils/Navigation";
import { RiSearch2Line, RiShoppingBag3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useCart } from "../../../provider/cartProvider";
import SearchProducts from "../../searchProducts/searchProducts";
import LogoIcon from "../../../utils/Logo";
const TopNavigation = ({show , setShow}) => {
  const {cart} = useCart();
  
  const [navbarColor , setNavbarColor] = useState(false);
  useEffect(()=>{
    const changeNavbarColor = () =>{
      const scroll = window.scrollY;
      if(scroll >= 80) {
        setNavbarColor(true);
      }
      else{
        setNavbarColor(false);
      }
    }
    window.addEventListener("scroll" , changeNavbarColor)
  } , [])

  return (
    <nav className={navbarColor ? "w-full p-4 hidden md:block fixed bg-gray-300 z-50 top-0 left-0 transition-all ease-in-out duration-300 shadow-md bg-opacity-80" : "w-full  p-6 hidden md:block fixed top-0 left-0 bg-transparent z-50 transition-all ease-in-out duration-300"}>
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <LogoIcon/>
        </div>
        <ul className="flex items-center gap-x-6 ">
          {Navigation().map((nav, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={nav.to}
                  className={({ isActive }) =>
                    isActive
                      ? "block font-bold text-gray-800 border-b-2 py-2 border-gray-800 tracking-wide transition-all ease-in-out duration-300"
                      : "text-gray-600 font-medium hover:block hover:text-gray-800 hover:border-b-2 hover:py-2 hover:border-gray-500 hover:font-bold transition-all ease-out duration-300 "
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-end gap-x-6 w-0 transition-all ease-in-out duration-500">
          <div className={"flex items-center justify-center relative transition-all ease-in-out duration-300"}>
            <span
              onClick={() => setShow(!show)}
              className={
                `text-xl absolute right-0 transition-all ease-in-out duration-500 cursor-pointer ${show ? 'md:-translate-x-[6.5rem] lg:-translate-x-[12.5rem] z-10' : 'translate-x-0' }`
              }
            >
              <RiSearch2Line />
            </span>
            {<SearchProducts show={show}/>}
            
          </div>
          <div className="flex items-center justify-center relative">
            <Link to="/cart" className="text-xl">
              <RiShoppingBag3Line />
              <span className="w-3 h-4 flex items-center justify-center text-xs rounded-full bg-cyan-900 text-gray-300 absolute  bottom-3 left-3">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
