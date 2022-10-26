import { Link } from "react-router-dom";
import Layout from "../../layout/layout";
import MobileNav from "../mobileNav/MobileNav";

const EmptyCart = () => {
    return ( 
        <Layout>
            <MobileNav/>
            <section className="max-w-screen-xl mx-auto px-4 md:px-0 pt-20 md:pt-36">
                <div className="w-full flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-4xl text-cyan-900 font-semibold">Oops!</h1>
                    <h2 className="text-base font-semibold text-gray-500 tracking-widest">No Item In Cart</h2>
                    <img src={require("./../../assets/images/empty-cart.png")} alt="empty cart" className="max-w-full  mx-auto h-auto object-cover"/>
                    <Link to={"/products"} className="p-2 bg-cyan-900 rounded-md text-gray-100 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500">Return  to shop</Link>
                </div>
            </section>
        </Layout>
     );
}
 
export default EmptyCart;