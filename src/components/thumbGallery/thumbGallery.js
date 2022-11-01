import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Thumb.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
const ThumbGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col gap-y-6 justify-center  mx-auto md:mx-0 h-min">
      <Swiper
        style={{
          "--swiper-navigation-color": "#4b5563",
          "--swiper-pagination-color": "#4b5563",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        grabCursor={true}
        className="mySwiper2 rounded-lg w-72  mx-auto md:mx-0 bg-transparent z-0 cursor-grab"
      >
        {product.image.map((item) => {
          return (
            <SwiperSlide className="bg-transparent w-full h-[400px]  flex mx-auto md:mx-0 " key={item._id}>
              <img
                src={require(`./../../assets/images/${item.path}`)}
                alt={product.name}
                className="max-w-full h-fit object-cover p-2"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3 z-0"
      >
        {product.image.map((item) => {
          return (
            <SwiperSlide
              key={item._id}
              className="bg-transparent ring-2 ring-cyan-900 rounded-md mx-4 cursor-pointer"
            >
              <img
                src={require(`./../../assets/images/${item.path}`)}
                alt={product.name}
                className="max-w-full h-auto object-cover p-2"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};



export default ThumbGallery;
/**
 * <div className="w-80 h-auto flex mx-auto md:mx-0  ">
        <img
          src={require(`./../assets/images/${product.image[0].path}`)}
          alt={product.name}
          className="max-w-full h-auto object-cover p-2"
        />
      </div>
      <div className="hidden md:flex flex-wrap items-center gap-4 px-0 md:px-6 flex-1 ">
        {product.image.map((item) => {
          return (
            <div
              className="w-32 h-32 lg:w-24 lg:h-28 ring ring-slate-700 rounded-md cursor-pointer p-2 flex justify-center items-center hover:ring outline-none border-none hover:ring-offset-2 hover:ring-slate-700 transition-all ease-in-out duration-300 shadow-md shadow-cyan-900"
              key={item._id}
            >
              <img
                src={require(`./../assets/images/${item.path}`)}
                alt={product.name}
                className="max-w-full h-auto object-cover p-2"
              />
            </div>
          );
        })}
      </div>
 */
