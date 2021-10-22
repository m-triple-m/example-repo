import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";
import { ProductContext } from "../productContext";
import productData from "./productData";
import './productlist.css';
import { Button, Card, CardContent, CardMedia, Paper, Grid } from "@mui/material";

const Product = (props) => {

    const data = props.productData;

    return (
        <Grid item md={4} sm={6} className="mt-5">
            <Card>
                <CardMedia style={{ padding: '20px' }} height="300" component="img" image={data.img} />
                <CardContent>
                    <p className="p-title">{data.name}</p>
                    <p className="p-price">₹ {data.price}/-</p>

                    <Link to={'/productdetails/' + props.p_index}>
                        <Button variant="contained" color="secondary">View</Button>
                    </Link>

                </CardContent>
            </Card>
        </Grid>
    )
}

const ProductList = () => {

    const initUser = () => {
        let user = sessionStorage.getItem('user');

        if (user) {
            return JSON.parse(user);
        } else {
            return {}
        }
    }

    const data = productData;
    const url = app_config.api_url;
    // const [productArray, setProductArray] = useState([]);
    const { productArray, fetchProductDetails } = useContext(ProductContext);


    // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [currentUser, setCurrentUser] = useState(initUser())



    useEffect(() => {
        fetchProductDetails();
    }, [])

    const displayUserDetails = () => {
        if (currentUser.email) {
            return (
                <>
                    <h2>Username : {currentUser.username}</h2>
                    <h2>Email : {currentUser.email}</h2>
                </>
            )
        } else {
            return <p>Not Loggedin? <Link to="/login">Login Now</Link></p>
        }
    }

    return (
        <Paper>
            {displayUserDetails()}
            <h1>Product List</h1>
            <hr />

            <div className="container">
                <Grid container>
                    {
                        productArray.map((product, index) => {
                            return (
                                <>
                                    {
                                        /* <h1>{product.name}</h1>
                                        <h2>{product.price}</h2> */
                                    }
                                    <Product productData={product} p_index={index}></Product>
                                </>
                            )
                        })
                    }
                </Grid>
            </div>


        </Paper>
    )

}

export default ProductList;