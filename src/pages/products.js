import Layout from "../layout/layout";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
    const [search] = useSearchParams();
    const productsCategories = search.get("cat") || "";

    console.log(productsCategories)
    return ( 
        <Layout>
                <section className="pt-36">
                    product Page
                </section>
            
        </Layout>
     );
}
 
export default ProductsPage;