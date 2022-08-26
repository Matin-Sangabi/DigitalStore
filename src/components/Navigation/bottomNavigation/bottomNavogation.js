import { NavLink} from "react-router-dom";
import { navigation } from "../../../utils/Navigation";
const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 bg-white shadow-sm rounded-t-[50%]  w-full p-6 md:hidden   flex justify-center items-center">
      <ul className="flex items-center w-full justify-between">
        {navigation.map((nav, index) => {
          return (
            <li key={index} className="flex flex-col">
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive
                    ? `animate-wiggle  p-2 text-2xl flex  rounded-full text-slate-100  items-center justify-center gap-x-2 bg-cyan-900`
                    : "rotate-0 p-0 text-slate-900 relative text-xl "
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
