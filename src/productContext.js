import { createContext, useState } from "react";
import productData from "./components/productData";
import app_config from "./config";

export const ProductContext = createContext();

export const ProductProvider = props => {

    const url = app_config.api_url;
    // const [productArray, setProductArray] = useState([]);
    const [productArray, setProductArray] = useState(productData);

    const fetchProductDetails = () => {
        fetch(url + '/product/getall')
            .then((res) => {
                console.log(res.status);
                return res.json();
            })
            .then((data => {
                console.log(data);
                // setProductArray(data);
            }))
    }

    return (
        <ProductContext.Provider value={{ productArray, setProductArray, fetchProductDetails }}>
            {props.children}
        </ProductContext.Provider>
    )
}