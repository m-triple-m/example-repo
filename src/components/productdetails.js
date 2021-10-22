import { useParams } from "react-router";
import productData from "./productData";

const ProductDetails = () => {

    const { id } = useParams();
    const productList = productData;
    const currentProduct = productList[id];

    return (
        <>
            <h1>Product Details</h1>
            <h1>Index : {id}</h1>
            <h1>{currentProduct.name}</h1>
            <h1>{currentProduct.price}</h1>
        </>
    )
}


export default ProductDetails;