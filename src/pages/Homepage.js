import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="grid grid-cols-12 w-full mx-auto gap-x-4 mb-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 order-2 md:order-1 ">
          <div className="w-full  p-2 text-gray-900 flex flex-col gap-y-4 mt-24">
            <h1 className="font-bold text-4xl w-4/5">
              Ready To Step Out with New Phone
            </h1>
            <div className="text-gray-500 flex flex-col lg:w-3/5 gap-4">
              <p className="font-bold text-base text-gray-600 mt-4">
                This is The New Iphone 13 pro Max
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <span>12Gb Ram</span>
                <span>12Gb Ram</span>
                <span>12Gb Ram</span>
              </div>
              <p className="w-4/5">
                This is new Future In Iphone and Lorem Ipsum is so good and i
                like it
              </p>
              <Link to="/products" className="p-4 w-2/3 mt-8 rounded-xl bg-cyan-900 text-slate-100 text-center font-bold focus:shadow-md hover:shadow-lg hover:ring hover:ring-offset-2 hover:ring-cyan-900 hover:shadow-cyan-900 focus:shadow-cyan-900 transition-all duration-300 ease-in-out">Shop Now</Link>
            </div>
            <div className="flex flex-col gap-4 p-2">
              <h1 className="text-2xl font-bold">25K+</h1>
              <p className="text-base">Well Reviews</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 order-1 md:order-2 relative">
          <div className="p-12 bg-slate-300 rounded-md mx-auto flex justify-center gap-6 ">
            
            <div className="flex items-center justify-center">
              <img
                src={require("./../assets/images/phone/iphone-13-pro-max-finish-unselect-gallery-2-202207.png")}
                className="w-[250px] md:w-[300px] mx-auto h-auto object-cover"
              />
            </div>
            
          </div>
          <div className="flex gap-4 absolute w-full items-center justify-center top-[95%] md:top-[85%] lg:top-[75%]">
              <div className="w-24 h-24 lg:w-32 lg:h-32 ring rounded-md ring-cyan-900 bg-slate-100"></div>
              <div className="w-24 h-24 lg:w-32 lg:h-32 ring rounded-md ring-cyan-900 bg-slate-100"></div>
              <div className="w-24 h-24 lg:w-32 lg:h-32 ring rounded-md ring-cyan-900 bg-slate-100"></div>
              
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
