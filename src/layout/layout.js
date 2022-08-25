import BottomNav from "../components/Navigation/bottomNavigation/bottomNavogation";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";

const Layout = ({ children }) => {
  return (
    <div>
       <TopNavigation/> 
      <BottomNav />
      <div className="mx-auto max-w-screen-2xl container p-4">{children}</div>
    </div>
  );
};

export default Layout;
