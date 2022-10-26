import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import MobileNav from "../components/mobileNav/MobileNav";

const NotFound = () => {
    return ( 
        <Layout>
            <MobileNav/>
            <section className="max-w-screen-xl mx-auto px-4 md:px-0 pt-20 md:pt-36">
                <div className="w-full flex flex-col items-center justify-center gap-y-6">
                    <h1 className="text-4xl md:text-6xl text-cyan-900 font-semibold">Oops!</h1>
                    <h2 className="text-base font-semibold text-gray-500 tracking-widest">Page not Found</h2>
                    <img src={require("./../assets/images/404.png")} alt="404 page" className="max-w-full w-96 md:w-[650px] pl-4 h-auto object-cover"/>
                    <Link to={"/"} className="p-2 bg-cyan-900 rounded-md mt-12 text-gray-100 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500">Return  to Home Page</Link>
                </div>
            </section>
        </Layout>
     );
}
 
export default NotFound;