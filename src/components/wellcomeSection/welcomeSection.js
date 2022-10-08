import { useEffect, useState } from "react";
import { BsCpu } from "react-icons/bs";
import {
  IoBatteryFullOutline,
  IoLogoAppleAppstore,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { getOneProducts } from "../../services/getOneProducts";
const WellComeSection = () => {
  const [product, setProducts] = useState(false);
  const id = "6341b39115a4661fe847dfcc";
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getOneProducts(id);
        setProducts(data);
      } catch (err) {
        console.log(console.log(err));
      }
    };
    getProduct();
  }, []);
  return (
    <section className="w-full relative overflow-hidden z-0 pt-36 pb-28 px-0 flex items-center before:content-[''] before:absolute before:-right-full before:top-[30%]   before:w-[260%] before:h-[200%] before:bg-gray-400 before:opacity-50  before:-z-10 before:skew-y-[135deg] mb-20 ">
      {product && (
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 w-full px-4">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-y-6 justify-center  order-2 md:order-1">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl text-gray-800 font-bold ">
                  {product.name}
                </h1>
                <h1 className="text-gray-800 font-bold text-4xl md:px-4 md:text-5xl lg:text-6xl">
                  has the best battery life ever on iPhone.
                </h1>
              </div>
              <p className="text-gray-500 text-base lg:text-lg">
                There’s no phone like iPhone.
              </p>
              <div className="flex gap-4 text-gray-600 flex-wrap col-span">
                <Description product={product} />
              </div>
              <p className="text-gray-500 text-sm">
                Fumble, bumble, and tumble resistant.
              </p>
              <p className="text-gray-500 text-sm">
                iOS 15. New ways to stay in the moment.
              </p>
              <div className="flex items-start justify-start relative z-40">
                <Link
                  to="/products"
                  className="p-4 w-52 cursor-pointer transition-all ease-in-out duration-500 hover:ring hover:ring-offset-2 hover:ring-cyan-900 hover:shadow-lg hover:shadow-cyan-900 bg-cyan-900 text-gray-100 rounded-md flex gap-x-4 items-center group  "
                >
                  <span>Shop Now</span>
                  <span className="group-hover:translate-x-5 transition-all ease-in-out duration-500">
                    <IoArrowForwardOutline />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col  items-center justify-center order-1 mb-16 md:order-2 ">
              <div className="md:w-96 md:h-auto md:max-h-96">
                {product && (
                  <img
                    src={require(`./../../assets/images/${product.image[2].path}`)}
                    className="max-w-full w-[330px] h-auto object-cover"
                    alt="name"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WellComeSection;

const Description = ({ product }) => {
  const icons = {
    chipSet: BsCpu(),
    battery: IoBatteryFullOutline(),
    os: IoLogoAppleAppstore(),
  };
  const productDesc = product.spec.map((item) => {
    switch (item.system.cat) {
      case "os": {
        return { ...item.system, icon: icons.os };
      }
      case "chipSet":
        return { ...item.system, icon: icons.chipSet };
      case "battery":
        return { ...item.system, icon: icons.battery };
      default:
        return { ...item.system };
    }
  });
  return productDesc.map((item, index) => {
    return (
      <div className="flex gap-x-2" key={index}>
        <span className="text-xl">{item.icon}</span>
        <div className="flex flex-col">
          <p className="text-base">{item.title}</p>
          <p className="text-gray-400">{item.sub}</p>
        </div>
      </div>
    );
  });
};
