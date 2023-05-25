import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../provider/productsProvider";
import { CalculatePriceOffer } from "../../utils/CalculateProductsOffer";
import ScrollOffset from "../scroll/ScrollOffset";
const OfferSection = () => {
  const products = useProducts();
  const [offerProducts, setOfferProducts] = useState(null);
  useEffect(() => {
    const offer = products.filter((product) => product.offPrice.isOff);
    setOfferProducts(offer);
  }, [products]);
  console.log(offerProducts);
  const ref = useRef(null);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if(!offerProducts) return <div>Loading ...</div>
  return (
    <div className="grid grid-cols-12 w-full mx-auto text-gray-800  px-4  xl:px-0 mb-24">
      <div className="col-span-12 md:col-span-3 flex flex-col justify-start gap-1 mb-12 pt-3">
        <h1 className="text-xl">{monthNames[new Date().getMonth()]}</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">Sale</span>Off
        </h2>
      </div>
      <div className="col-span-12 md:col-span-9 flex flex-col">
        {offerProducts.length !== 0 ? (
          <div
            className="flex flex-nowrap items-end overflow-x-auto mb-4 w-full gap-x-8 md:gap-x-12 justify-between scroll-smooth scrollbar"
            ref={ref}
          >
            {offerProducts.map((offer) => {
              return (
                <Link
                  to={`./product/${offer._id}`}
                  className="flex flex-col items-center mb-6"
                  key={offer._id}
                >
                  <div className="w-36 h-auto relative flex items-center mb-4">
                    <img
                      src={require(`./../../assets/images/${offer.image[0].path}`)}
                      alt={offer.name}
                      className="max-w-full h-auto object-cover"
                    />
                    <span className="w-10 h-10 rounded-full bg-cyan-900 absolute -right-3 flex items-center justify-center text-slate-100 text-sm font-semibold">
                      {offer.offPrice.cent}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-sm font-semibold h-10">{offer.name}</h1>
                    <div className="flex gap-x-4">
                      <h2 className="font-bold">Price : </h2>
                      <h2>
                        <span className="text-xs text-gray-600 line-through">
                          {offer.price} $
                        </span>{" "}
                        <span className="font-bold  text-cyan-900">
                          {offer.price - offer.discount} $
                        </span>{" "}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <span>Loading...</span>
        )}
        <div
          className={`block ${
            offerProducts.length > 4 ? "lg:block" : "lg:hidden"
          }`}
        >
          <ScrollOffset refs={ref} changer={150} />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
