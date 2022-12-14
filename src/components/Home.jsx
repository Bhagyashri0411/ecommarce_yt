import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark  border-0">
                <img src="/assets/images/bg-1.jpg" className="card-img" alt="broken" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container text-center">

                    <h5 className="card-title display-2 fw-bolder">NEW SEASON ARRIVALS</h5>
                    <p className="card-text">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home;