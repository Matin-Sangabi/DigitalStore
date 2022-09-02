import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../../utils/Navigation";
import { RiSearch2Line, RiShoppingBag3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
const TopNavigation = () => {
  const [show, setShow] = useState(false);
  const [navbarColor , setNavbarColor] = useState(false);
  useEffect(()=>{
    const changeNavbarColor = () =>{
      const scroll = window.scrollY;
      if(scroll >= 98) {
        setNavbarColor(true);
      }
      else{
        setNavbarColor(false);
      }
    }
    window.addEventListener("scroll" , changeNavbarColor)
  } , [])

  return (
    <nav className={navbarColor ? "w-full p-4 hidden md:block fixed bg-gray-300 z-50 transition-all ease-in-out duration-300 shadow-md opacity-90" : "w-full  p-6 hidden md:block fixed bg-transparent z-50 transition-all ease-in-out duration-300"}>
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <Link to="/">
            <img
              src={require("./../../../assets/images/Apple Logo PNG Vector (AI) Free Download.png")}
              className="w-10 h-10 object-cover block"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="flex items-center gap-x-6 ml-6">
          {navigation.map((nav, index) => {
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
        <div className="flex items-center justify-center gap-x-6">
          <div className={show ? "flex items-center justify-center relative w-full" : "flex items-center justify-center relative w-5"}>
            <span
              onClick={() => setShow(!show)}
              className={
                show
                  ? "text-xl absolute left-2 cursor-pointer z-20 transition-all ease-linear duration-300 "
                  : "text-xl absolute right-2 cursor-pointer transition-all ease-linear duration-300"
              }
            >
              <RiSearch2Line />
            </span>
            <input
              type="text"
              placeholder="search"
              className={
                show
                  ? "translate-y-0 z-10  transition-all duration-300 ease-linear py-2 px-8 w-56 rounded-md bg-gray-200 text-gray-600 border-none outline-none focus:ring-2 focus:shadow-md focus:shadow-cyan-900 focus:ring-cyan-900 "
                  : "-translate-y-96 "
              }
            />
          </div>
          <div className="flex items-center justify-center relative">
            <Link to="/cart" className="text-xl">
              <RiShoppingBag3Line />
              <span className="w-3 h-4 flex items-center justify-center text-xs rounded-full bg-cyan-900 text-gray-300 absolute  bottom-3 left-3">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
