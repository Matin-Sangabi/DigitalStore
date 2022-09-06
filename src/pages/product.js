import { useEffect, useState } from "react";
import { IoPhonePortraitOutline ,IoLaptopOutline , IoInfinite , IoWatchOutline , IoTabletPortraitOutline} from "react-icons/io5";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import { getOneProducts } from "../services/getOneProducts";
const ProductPage = () => {
    const [product , setProduct] = useState(false);
    const [icons , setIcons] = useState();
    const location = useParams();
    const id = location.id;
    
    useEffect(()=>{
        const getProduct = async () =>{
            try{
                const {data} = await getOneProducts(id);
                setProduct(data);
            }
            catch(err){
                console.log(err)
            }
        }
        getProduct();
    } , [id])
    useEffect(()=>{
        const productModel = (model) =>{
            switch(model){
                case 'phone' : return setIcons(() =><IoPhonePortraitOutline/>);
                case 'Mac' : return setIcons(() =><IoLaptopOutline/>);
                case 'watch' : return setIcons(() =><IoWatchOutline/>);
                case 'air pod' : return setIcons(() =><IoInfinite/>);
                case 'ipad' : return setIcons(() =><IoTabletPortraitOutline/>)
                default : return setIcons("");
            }
        }
        productModel(product.categories);
    } , [ product])
    console.log(icons)
    return (  
        <Layout>
            {product && 
                <section className="w-full grid grid-cols-12 pt-28 max-w-screen-xl mx-auto px-4 xl:px-0 ">
                <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-12 mx-auto">
                        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col gap-y-6 justify-center  mx-auto md:mx-0">
                            <div className="w-80 h-auto flex mx-auto md:mx-0  ">
                                <img src={require(`./../assets/images/${product.image[0].path}`)} alt={product.name} className="max-w-full h-auto object-cover p-2"/>
                            </div>
                            <div className="hidden md:flex items-center gap-4 px-0 md:px-6 flex-1 ">
                                {product.image.map((item)=>{
                                    return(
                                        <div className="w-32 h-32 lg:w-28 lg:h-28 ring ring-slate-700 rounded-md cursor-pointer p-2 flex justify-center items-center hover:ring outline-none border-none hover:ring-offset-2 hover:ring-slate-700 transition-all ease-in-out duration-300" key={item._id}>
                                            <img src={require(`./../assets/images/${item.path}`)} alt={product.name} className="max-w-full h-28 object-cover p-1"/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-6">
                            <h1 className="font-bold text-lg text-cyan-900">{icons}{product.categories}</h1>
                        </div>

                    </div>
                </div>
                <div className="hidden md:flex col-span-4">
                    bye
                </div>
            </section>
            }
        </Layout>
    );
}
 
export default ProductPage;