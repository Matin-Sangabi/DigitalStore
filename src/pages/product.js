import { useParams } from "react-router-dom";
const ProductPage = () => {
    const location = useParams();
    console.log(location)
    return (  
        <div>
            product single Page
        </div>
    );
}
 
export default ProductPage;