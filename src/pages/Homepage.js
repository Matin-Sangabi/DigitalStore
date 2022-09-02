import CategoriesSection from "../components/categoriesSection/categoriesSection";
import OfferSection from "../components/offerSection/offerSection";
import WellComeSection from "../components/wellcomeSection/welcomeSection";
import Layout from "../layout/layout";
import { useProducts } from "../provider/productsProvider";

const HomePage = () => {
  const products = useProducts();
  console.log(products)
  return (
    <Layout>
      <WellComeSection/>
      <div className="max-w-screen-xl mx-auto">
        <CategoriesSection/>  
        <OfferSection/>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
