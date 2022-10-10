import BottomNav from "../components/Navigation/bottomNavigation/bottomNavogation";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";
import { useState } from "react";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="-1z-10">
       <TopNavigation show={show} setShow={setShow}/> 
       <section onClick={()=> setShow(false)}>
        {children}
       </section>
      <BottomNav />
    </div>
  );
};

export default Layout;
