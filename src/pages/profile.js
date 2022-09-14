import Layout from "../layout/layout";
import { useAuth } from "../provider/AuthProvider";
import { useCart } from "../provider/cartProvider";
const Profile = () => {
    const Auth = useAuth();
    const {total} = useCart();
    return ( 
        <Layout>
            <section className="pt-36 max-w-screen-xl mx-auto">
                <div className="bg-gray-200 w-full rounded-md shadow-md p-4 grid grid-cols-12">
                    <div className="col-span-6 flex gap-x-6">
                        <div className="w-36 h-36 rounded-full bg-gray-500 "></div>
                        <div className="p-4 flex flex-col gap-y-2 flex-1">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-slate-800 text-2xl tracking-wide">{Auth.name}</h1>
                                <h1 className="font-semibold text-slate-800 text-2xl tracking-wide">{total}$</h1>
                            </div>
                            <p className="text-gray-500 ">{Auth.email}</p>
                            <p className="text-gray-500 ">{Auth.phoneNumber}</p>
                            <div className="w-full flex gap-x-2">
                                <button className="flex-1 p-2 ring-2 ring-cyan-900 bg-cyan-900 text-slate-100 rounded-md shadow-md">Logout</button>
                                <button className="flex-1  p-1 ring-2 ring-cyan-900 rounded-md shadow-md">Edit</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-span-6 border-0 border-l-2 border-gray-500 p-4"></div>
                </div>
            </section>
        </Layout>
     );
}
 
export default Profile;