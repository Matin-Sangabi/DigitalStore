import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-8 md:gap-4 items-start md:items-center justify-between px-4 lg:px-2 xl:px-0 mb-16">
      <div className="flex flex-col gap-y-2 text-gray-800">
        <h1 className="font-semibold">Our</h1>
        <h2 className="text-4xl font-bold tracking-widest"><span className="border-b-2 py-2 border-gray-800 ">Categ</span>Ories</h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12  lg:w-3/4 w-full mx-auto lg:mx-0">
        <Link
          to="/products?cat=watch"
          className="text-base text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500"
        >
          <div className="col-span-8 flex items-center justify-center">
            <h1 className="font-bold  p-4">Apple Watch</h1>
          </div>
          <div className="col-span-4 w-20 h-auto">
            <img
              src={require("./../../assets/images/watch/MKUQ3_VW_34FR+watch-44-alum-spacegray-nc-se_VW_34FR_WF_CO-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </Link>
        <Link
          to="/categories"
          className="text-base text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:bg-gray-400 hover:text-gray-800 hover:text-xl transition-all ease-in-out duration-500"
        >
          <div className="col-span-8 flex items-center justify-center">
            <h1 className="font-bold p-4">IPhone</h1>
          </div>
          <div className="col-span-4 w-20 h-24">
            <img
              src={require("./../../assets/images/phone/iphone-12-storage-select-202207-5-4inch-purple.png")}
              alt="categories"
              className="max-w-full h-24 object-cover"
            />
          </div>
        </Link>
        <Link
          to="/categories"
          className="text-base text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500"
        >
          <div className="col-span-8 flex items-center justify-center">
            <h1 className="font-bold  p-4">IPad</h1>
          </div>
          <div className="col-span-4 w-20 h-auto">
            <img
              src={require("./../../assets/images/ipad/ipad-pro-11-select-cell-spacegray-202104-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-24 object-cover"
            />
          </div>
        </Link>

        <Link
          to="/categories"
          className="text-base text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300 hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500"
        >
          <div className="col-span-8 flex items-center justify-center">
            <h1 className="font-bold   p-4">AirPods</h1>
          </div>
          <div className="col-span-4 w-20 h-auto">
            <img
              src={require("./../../assets/images/airpod/MWP22_AV1-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-24 object-cover"
            />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CategoriesSection;
