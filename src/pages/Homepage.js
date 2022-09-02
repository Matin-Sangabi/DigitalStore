import { useEffect, useState } from "react";
import CategoriesSection from "../components/categoriesSection/categoriesSection";
import OfferSection from "../components/offerSection/offerSection";
import WellComeSection from "../components/wellcomeSection/welcomeSection";
import Layout from "../layout/layout";
import { getProducts } from "../services/getProductsServicess";

const HomePage = () => {
  const [products, setProducts] = useState(false);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);
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
