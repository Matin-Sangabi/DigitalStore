import BottomNav from "../components/Navigation/bottomNavigation/bottomNavogation";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";

const Layout = ({ children }) => {
  return (
    <div>
       <TopNavigation/> 
      <div className="mx-auto max-w-screen-2xl container z-10">{children}</div>
      <BottomNav />
    </div>
  );
};

export default Layout;
