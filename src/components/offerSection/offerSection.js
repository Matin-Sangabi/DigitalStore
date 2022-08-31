const OfferSection = () => {
    return (  
        <div className="grid grid-cols-12 w-full mx-auto text-gray-800 mb-40 px-4 lg:px-0">
            <div className="col-span-12 md:col-span-4 flex flex-col justify-center gap-4 mb-12">
                <h1 className="text-xl">summer</h1>
                <h2 className="text-4xl font-bold tracking-widest"><span className="border-b-2 py-2 border-gray-800 ">Sale</span> Off </h2>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-nowrap items-center md:justify-end overflow-x-auto mb-4 w-full gap-x-8 md:gap-x-12">
                <div className="flex flex-col items-center">
                    <div className="w-40 h-auto relative flex items-center">
                        <img src={require("./../../assets/images/airpod/MME73-removebg-preview.png")} alt="ma,e1" className="max-w-full h-auto object-cover"/>
                        <span className="w-10 h-10 rounded-full bg-cyan-900 absolute right-0 flex items-center justify-center text-slate-100 text-sm">20%</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Apple airpods summer sale offer</h1>
                        <div className="flex gap-x-4">
                            <h2 className="font-bold">Price : </h2>
                            <h2><span className="line-through">400%</span> <span className="font-bold">320$</span> </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-40 h-auto relative flex items-center">
                        <img src={require("./../../assets/images/airpod/MV7N2__1_-removebg-preview.png")} alt="ma,e1" className="max-w-full h-auto object-cover"/>
                        <span className="w-10 h-10 rounded-full bg-cyan-900 absolute right-0 flex items-center justify-center text-slate-100 text-sm">20%</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Apple airpods summer sale offer</h1>
                        <div className="flex gap-x-4">
                            <h2 className="font-bold">Price : </h2>
                            <h2><span className="line-through">400%</span> <span className="font-bold">320$</span> </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-gray-800">
                    <div className="w-40 h-auto relative flex items-center">
                        <img src={require("./../../assets/images/airpod/MME73-removebg-preview.png")} alt="ma,e1" className="max-w-full h-auto object-cover"/>
                        <span className="w-10 h-10 rounded-full bg-cyan-900 absolute right-0 flex items-center justify-center text-slate-100 text-sm">20%</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Apple airpods summer sale offer</h1>
                        <div className="flex gap-x-4">
                            <h2 className="font-bold">Price : </h2>
                            <h2><span className="line-through">400%</span> <span className="font-bold">320$</span> </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OfferSection;