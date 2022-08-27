import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    </Layout>
  );
};

export default HomePage;
