import BottomNav from "../components/Navigation/bottomNavigation/bottomNavogation";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";
import { useState } from "react";
import useDocumentTitle from "../components/documentTitle/DocumentTitle";

const Layout = ({ children , title}) => {
  const [show, setShow] = useState(false);
  const defaultTitle = 'Apple';
  useDocumentTitle(`${defaultTitle} | ${title}`)
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
