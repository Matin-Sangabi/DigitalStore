import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

const AdvertisingSection2 = () => {
  return (
    <div className="grid grid-cols-12 w-full mx-auto text-gray-800  px-4  xl:px-0 mb-24 gap-y-8 gap-x-4">
      <div className="col-span-12 md:col-span-3 lg:col-span-3 flex flex-col justify-start   gap-1 mb-12 pt-3">
        <h1 className="text-xl">Apple</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">Ipadp</span>ro
        </h2>
      </div>
      <div className="col-span-12 md:col-span-9 lg:col-span-5 flex flex-col md:flex-row h-full items-center justify-center gap-4 mb-4">
        <div className="flex-1 flex flex-col">
          <h1 className="text-gray-800 text-lg font-semibold">
            <b className="font-bold">11”</b> Liquid Retina display.
            Pixel‑perfect portability.
          </h1>
          <h2 className="text-sm lg:text-base">
            Easy on the eyes. Easy to carry. The Liquid Retina display on the
            11‑inch iPad Pro is not only gorgeous and portable, it also features
            incredibly advanced technologies.4 Like ProMotion, True Tone, P3
            wide colour and ultra‑low reflectivity, which make everything feel
            responsive and look stunning.Enhanced ways to work.
          </h2>
        </div>
        <div className="flex flex-col flex-1 gap-y-1 ">
          <div className="flex flex-col gap-1 ">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-5xl">
              600 nits
            </h1>
            <p className="text-gray-500 text-sm px-1">peak brightness</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-5xl">
              True Tone
            </h1>
            <p className="text-gray-500 text-sm px-1">
              for comfortable viewing
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 text-5xl">
              ProMotion
            </h1>
            <p className="text-gray-500 text-sm px-1">
              for comfortable viewing
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 text-5xl">
              P3
            </h1>
            <p className="text-gray-500 text-sm px-1">wide colour gamut</p>
          </div>
        </div>
      </div>
     <div className="w-full col-span-12 md:col-span-11   px-10 lg:col-span-4 ">
     <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
        className="w-full "
      >
        <SwiperSlide className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-lg">
          <Link to={"/products?cat=ipad"}>
            <img
              src={"/images/m2-ipad-pro-title-removebg-preview.png"}
              alt="Ipad pro"
              className="max-w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg">
          <Link to={"/products?cat=ipad"}>
            <img
              src={"/images/accessories_hero__f5hy8spj2ouy_large.png"}
              alt="Ipad Pro"
              className="w-40 md:w-56 object-cover"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  );
};

export default AdvertisingSection2;
