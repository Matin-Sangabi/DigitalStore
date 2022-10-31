import { HiChevronLeft , HiChevronRight } from "react-icons/hi";

const ScrollOffset = ({refs , changer}) => {
    const scroll = (scrollOffset) =>{
        refs.current.scrollLeft += scrollOffset;
    }
    return ( 
        <div className="flex gap-x-2 h-10">
          <button className="text-xl text-gray-800 focus:text-3xl hover:text-3xl transition-all ease-in-out duration-300" onClick={()=> scroll(-changer)}><HiChevronLeft/></button>
          <button className="text-xl text-gray-800 focus:text-3xl hover:text-3xl transition-all ease-in-out duration-300" onClick={() => scroll(changer)}><HiChevronRight/></button>
        </div>
     );
}
 
export default ScrollOffset;