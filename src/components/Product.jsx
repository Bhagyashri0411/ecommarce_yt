import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import ReactImageZoom from 'react-image-zoom';
import Skeleton from "react-loading-skeleton";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getNewProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/2`);
            setProduct(await response.json());
            setLoading(false);
            console.log(id, "kjcncs");
        }
        getNewProduct();
    }, []);


    const Loading = () => {
        return (
            <>
              <div className="col-md-6">
                <Skeleton height={400}></Skeleton>
              </div>
              <div className="col-md-6">
                <Skeleton height={50} width={300}></Skeleton>
                <Skeleton height={75} ></Skeleton>
                <Skeleton height={25} width={150}></Skeleton>
                <Skeleton height={50} ></Skeleton>
                <Skeleton height={150}></Skeleton>
              </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" zoomWidth= "500" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder"> Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
                    <h3 className="display-6 fw-bold my-4">Rs. {product.price}</h3>
                    <button className="btn btn-outline-dark">
                        Add to Cart
                    </button>

                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    );
}

export default Product;