import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loading = () => {
  return (
    <div>
      <div className="w-full mb-8 grid grid-cols-12  bg-slate-100 rounded-md shadow-md gap-4 p-4">
        <div className="col-span-6 md:col-span-4 h-full rounded w-full">
          <Skeleton className="w-full h-full bg-gradient-to-bl  bg-gray-400 opacity-50"/>
        </div>
        <div className="col-span-6 md:col-span-8 w-full rounded-md p-2 flex flex-col gap-y-4">
          <div className="px-2 py-2 w-full  rounded bg-gray-400"></div>
          <div className="grid grid-cols-3 gap-4 w-full mb-8">
            <div className="h-3 bg-gray-400 rounded col-span-2"></div>
            <div className="h-3 bg-gray-400 rounded col-span-1"></div>
          </div>
          <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
          <div className="flex justify-end">
            <button className="p-4 bg-gray-400 w-32 rounded-md"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
/*
/*
<div key={index} className="bg-slate-100 rounded-md shadow-md flex flex-col gap-y-4 p-2 items-center animate-pulse -z-10">
              <div className="w-full h-32 md:h-44 p-2 bg-gray-400 rounded-md"></div>
              <div className="px-2 py-2 w-full  rounded bg-gray-400"></div>
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                <div className="h-2 bg-gray-400 rounded col-span-1"></div>
              </div>
              <button className="p-4 w-full rounded bg-gray-400 cursor-pointer"></button>
            </div>



            /---------
            <div>
        <div className="w-full mb-8 grid grid-cols-12  bg-slate-100 rounded-md shadow-md gap-4 p-4">
          <div className="col-span-6 md:col-span-4 h-full rounded w-full">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <p>
                <Skeleton count={3} />
              </p>
            </SkeletonTheme>
          </div>
          <div className="col-span-6 md:col-span-8 w-full rounded-md p-2 flex flex-col gap-y-4">
            <div className="px-2 py-2 w-full  rounded bg-gray-400"></div>
            <div className="grid grid-cols-3 gap-4 w-full mb-8">
              <div className="h-3 bg-gray-400 rounded col-span-2"></div>
              <div className="h-3 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="px-2 h-2 w-full  rounded hidden md:block bg-gray-400"></div>
            <div className="flex justify-end">
              <button className="p-4 bg-gray-400 w-32 rounded-md"></button>
            </div>
          </div>
        </div>
        
      </div>
*/
