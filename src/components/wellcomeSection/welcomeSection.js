import { BsCpu } from "react-icons/bs";
import { IoBatteryFullOutline ,IoLogoAppleAppstore ,IoArrowForwardOutline} from "react-icons/io5";
import { Link } from "react-router-dom";
const WellComeSection = () => {
  return (
    <section className="w-full relative overflow-hidden z-0 pt-36 pb-28 px-0 flex items-center before:content-[''] before:absolute before:-right-full  before:w-[300%] before:h-[200%] before:bg-gray-400 before:opacity-50  before:-z-10 before:skew-y-[135deg] ">
        <div className="container max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12 w-full px-4">
                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-6 justify-center  order-2 md:order-1">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl text-gray-800 font-bold ">Iphone 13 pro Max</h1>
                        <h1 className="text-gray-800 font-bold text-4xl md:px-4 md:text-5xl lg:text-6xl"> has the best battery life ever on iPhone.</h1>
                    </div>
                    <p className="text-gray-500 text-base lg:text-lg">There’s no phone like iPhone.</p>
                    <div className="flex gap-4 text-gray-600 flex-wrap col-span">
                        <div className="flex gap-x-2 ">
                            <span className="text-xl"><BsCpu/></span>
                            <div className="flex flex-col">
                                <p className="text-base">A15 Bionic Chip</p>
                                <p className="text-gray-400">5‑core GPU</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2 ">
                            <span className="text-xl"><IoBatteryFullOutline/></span>
                            <div className="flex flex-col">
                                <p className="text-base">Up to 28 hours video</p>
                                <p className="text-gray-400">playback2</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2 ">
                            <span className="text-xl"><IoLogoAppleAppstore/></span>   
                            <div className="flex flex-col">
                                <p className="text-base">Ios 15 </p>
                                <p className="text-gray-400">5G support</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">Fumble, bumble, and tumble resistant.</p>
                    <p className="text-gray-500 text-sm">iOS 15. New ways to stay in the moment.</p>
                    <div className="flex items-start justify-start relative z-40">
                        <Link to="/products" className="p-4 w-52 cursor-pointer transition-all ease-in-out duration-500 hover:ring hover:ring-offset-2 hover:ring-cyan-900 hover:shadow-lg hover:shadow-cyan-900 bg-cyan-900 text-gray-100 rounded-md flex gap-x-4 items-center group  ">
                            <span>Shop Now</span>
                            <span className="group-hover:translate-x-5 transition-all ease-in-out duration-500"><IoArrowForwardOutline/></span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col  items-center justify-center order-1 mb-16 md:order-2 ">
                    <div className="md:w-96 md:h-auto md:max-h-96">
                        <img src={require("./../../assets/images/phone/iphone-13-pro-model-unselect-gallery-2-202207_GEO_US.png")} className="max-w-full w-[330px] h-auto object-cover" alt="name"/>
                    </div>
                    <div className="flex gap-4 md:absolute md:bottom-2 md:right-5">
                        <div className="w-20 h-20 ring ring-gray-500  rounded-md flex justify-center items-center hover:ring-5 hover:ring-cyan-900 cursor-pointer transition-all ease-in-out duration-500 ">
                            <img src={require("./../../assets/images/phone/iphone-13-finish-select-202207-6-1inch-midnight.png")} className="max-w-full w-[50px] h-auto object-cover" alt="slide-pic"/>
                        </div>
                        <div className="w-20 h-20 ring ring-gray-500  rounded-md flex justify-center items-center hover:ring-cyan-900 cursor-pointer transition-all ease-in-out duration-500 ">
                            <img src={require("./../../assets/images/phone/iphone-13-finish-select-202207-6-1inch-midnight_AV1_GEO_US.png")} className="max-w-full w-[50px] h-auto object-cover" alt="slide-pic"/>
                        </div>
                        <div className="w-20 h-20 ring ring-gray-500  rounded-md flex justify-center items-center hover:ring-cyan-900 cursor-pointer transition-all ease-in-out duration-500 ">
                            <img src={require("./../../assets/images/phone/iphone-13-pro-model-unselect-gallery-2-202207_GEO_US.png")} className="max-w-full w-[50px] h-auto object-cover " alt="slide-pic"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WellComeSection;
