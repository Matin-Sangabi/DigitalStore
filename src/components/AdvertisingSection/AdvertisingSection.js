const AdvertisingSection = () => {
  return (
    <div className="grid grid-cols-12 w-full mx-auto text-gray-800  px-4  xl:px-0 mb-24">
      <div className="col-span-12 md:col-span-3 flex flex-col  gap-1 mb-12 pt-3">
        <h1 className="text-xl">Apple</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">watch</span>Pro
        </h2>
      </div>
      <div className="col-span-12 md:col-span-9 flex flex-col">
        <div className="grid grid-cols-12 mx-auto">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-center">
              <div className=" md:w-[80%]">
                <h1 className="text-base text-gray-500">
                  <b className="text-gray-800">
                    86-decibel Siren. Sonic salvation
                  </b>
                  . If you get lost or injured and need to attract attention,
                  hold the Action button to activate a Siren that can be heard
                  up to 600 feet or 180 meters away.
                </h1>
              </div>
              <div className="w-80 md:w-96">
                <img
                  src={require("./../../assets/images/ocean_ready__eho37eb5efgy_large-removebg-preview.png")}
                  className="max-w-full h-auto object-cover"
                  alt="Apple Watch Pro"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex  md:flex-row  gap-x-4 mx-auto md:ml-20 mt-10 md:mt-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-cyan-900 font-bold">
                  Up To <br />
                  60 hours
                </h1>
                <span className="text-sm text-gray-500">
                  On low power settings for days full of adventure.
                </span>
                <h1 className="text-4xl text-cyan-900 font-bold mt-4">
                  -20° C to <br />
                  55° C
                </h1>
                <span className="text-sm text-gray-500">
                  On-wrist operating temperature that can endure chilly
                  mountaintops or searing desert heat
                </span>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button className="w-28 p-1 z-20 border border-cyan-900  rounded-2xl relative text-sm text-cyan-900 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:z-0 after:rounded-2xl hover:text-gray-100 after:bg-cyan-900  after:transition-all after:ease-linear after:duration-300 hover:after:w-full transition-all ease-in-out duration-500"><span className="relative z-10">coming soon</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSection;
