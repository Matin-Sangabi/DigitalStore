import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./appleTv.css";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import { HiPlay} from "react-icons/hi";
const swiper = [{}];
const AppleTvPlus = () => {
  return (
    <div className="grid grid-cols-12 w-full mx-auto mb-24 text-gray-800  px-4">
      <div className="col-span-12 md:col-span-3 flex flex-col justify-center gap-4 mb-12">
        <h1 className="text-xl">Apple</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">TvPl</span>us+
        </h2>
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="mySwiper col-span-12 md:col-span-9 rounded-md"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={require("./../../assets/images/tv+/See-Apple-TV-series-1.jpg")}
              className="w-full h-auto object-cover"
              alt="appleTv+"
            />
            <div className="w-full flex justify-between items-center absolute bottom-32 px-4 text-slate-200">
              <h1 className="font-bold text-4xl">Drama</h1>
              <span className="font-semibold text-lg text-gray-800 ">
                The epic series comes to an end.
              </span>
              <button type="button" className="flex items-center gap-x-2 justify-center p-2 rounded-3xl text-base  bg-gray-100 text-gray-800 hover:bg-slate-300 transiation-all ease-in-out duration-500"><span>stream now</span><span ><HiPlay className="text-3xl pt-1"/></span></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppleTvPlus;
