import { NavLink} from "react-router-dom";
import  Navigation  from "../../../utils/Navigation";

const BottomNav = () => {
  return (
    <nav className="fixed  left-0 bottom-2  w-full  md:hidden flex justify-center items-center">
      <ul className="flex items-center w-[95%] mx-auto bg-gray-400 justify-between p-2 rounded-md shadow-sm bg-opacity-90">
        {Navigation().map((nav, index) => {
          return (
            <li key={index} className="flex flex-col">
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive
                    ? `animate-wiggle  p-2 text-2xl flex  rounded-full text-slate-100  items-center justify-center gap-x-2 bg-cyan-900`
                    : "rotate-0 p-0 text-cyan-900 relative text-xl "
                }
                
              >
                <span>{nav.icon()}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
