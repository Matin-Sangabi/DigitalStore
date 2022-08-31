import { useEffect, useState } from "react";
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
  console.log(products)
  return (
    <Layout>
      <WellComeSection/>
      <div className="max-w-screen-2xl mx-auto">
        <OfferSection/>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
