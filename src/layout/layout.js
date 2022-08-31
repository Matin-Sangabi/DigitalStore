import BottomNav from "../components/Navigation/bottomNavigation/bottomNavogation";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";

const Layout = ({ children }) => {
  return (
    <div>
       <TopNavigation/> 
       {children}
      <BottomNav />
    </div>
  );
};

export default Layout;
