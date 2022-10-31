import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-8 md:gap-4 items-start md:items-start justify-between px-4 lg:px-2 xl:px-0 mb-24">
      <div className="flex flex-col gap-y-1 text-gray-800 pt-3">
        <h1 className="font-semibold">Our</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">Categ</span>Ories
        </h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12  lg:w-3/4 w-full mx-auto lg:mx-0">
        <Link
          to="/products?cat=watch"
          className="text-base text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500 group"
        >
          <div className="col-span-7 flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold">Apple Watch</h1>
              <h1 className="text-sm text-gray-400 group-hover:text-gray-200 w-[90%]">
                Design and durability Beautiful. And made to stay that way.
              </h1>
            </div>
          </div>
          <div className="col-span-5 w-28 lg:w-24 h-auto">
            <img
              src={require("./../../assets/images/watch/MKUQ3_VW_34FR+watch-44-alum-spacegray-nc-se_VW_34FR_WF_CO-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </Link>
        <Link
          to="/products?cat=phone"
          className="text-base group text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:bg-gray-400 hover:text-gray-800 hover:text-xl transition-all ease-in-out duration-500"
        >
          <div className="col-span-7 flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold">IPhone</h1>
              <h1 className="text-sm text-gray-400 w-[90%] group-hover:text-gray-200 ">
                We’ll help you find a carrier plan and activate your new iPhone
                in person.
              </h1>
            </div>
          </div>
          <div className="col-span-5 w-32 lg:w-24 h-auto">
            <img
              src={require("./../../assets/images/phone/iphone-12-storage-select-202207-5-4inch-purple.png")}
              alt="categories"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </Link>
        <Link
          to="/products?cat=ipad"
          className="text-base group text-gray-600 bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300  hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500"
        >
          <div className="col-span-7 flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold">IPad</h1>
              <h1 className="text-sm text-gray-400 w-[90%] group-hover:text-gray-200">Expand what you can do with everyday essentials designed just for iPad</h1>
            </div>
          </div>
          <div className="col-span-5 w-36 lg:w-28 h-auto">
            <img
              src={require("./../../assets/images/ipad/ipad-pro-11-select-cell-spacegray-202104-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </Link>

        <Link
          to="/products?cat=air pod"
          className="text-base text-gray-600 group bg-gray-200 shadow-md shadow-gray-200 px-4 py-2 rounded-md flex items-center justify-between hover:shadow-2xl hover:shadow-gray-300 hover:text-xl hover:bg-gray-400 hover:text-gray-800 transition-all ease-in-out duration-500"
        >
          <div className="col-span-7 flex items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-bold">AirPods</h1>
              <h1 className="text-sm text-gray-400 w-[90%] group-hover:text-gray-200">Say it in a way only you can Discover new engraving options for AirPods.</h1>
            </div>
          </div>
          <div className="col-span-5 w-40 lg:w-36 h-auto">
            <img
              src={require("./../../assets/images/airpod/MWP22_AV1-removebg-preview.png")}
              alt="categories"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CategoriesSection;
