import { useState , useEffect , createContext , useContext } from "react";
import { getProducts } from "../services/getProductsServicess";
const productsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(false);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);
    return ( 
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
     );
}
 
export default ProductsProvider;

export const useProducts = () => useContext(productsContext);