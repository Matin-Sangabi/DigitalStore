import AdvertisingSection from "../components/AdvertisingSection/AdvertisingSection";
import AdvertisingSection2 from "../components/AdvertisingSection/AdvertisingSection2";
import AppleTvPlus from "../components/AppleTv+/AppleTvPlus";
import CategoriesSection from "../components/categoriesSection/categoriesSection";
import MobileNav from "../components/mobileNav/MobileNav";
import OfferSection from "../components/offerSection/offerSection";
import ProductsSection from "../components/productsSection/productsSection";
import WellComeSection from "../components/wellcomeSection/welcomeSection";
import Layout from "../layout/layout";
const HomePage = () => {  
  
  return (
    <Layout title={"Home"}>
      <MobileNav />
      <WellComeSection />

      <div className="max-w-screen-xl mx-auto">
        <CategoriesSection />
        {/* <OfferSection /> */}
        {/* <ProductsSection/> */}
        <AdvertisingSection/>
        <AdvertisingSection2/>
        {/* <AppleTvPlus/> */}
      </div>
    </Layout>
  );
};

export default HomePage;
