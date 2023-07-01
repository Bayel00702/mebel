import React, {useEffect, useState} from 'react';
import ProductSlider from "../../Companents/ProductSlider/ProductSlider";
import ProductInfo from "../../Companents/ProductInfo/ProductInfo";
import ProductDesc from "../../Companents/ProductDesc/ProductDesc";
import {useParams} from "react-router-dom"
import api from "../../config/Api/Api";
import HitSale from "../../Companents/HitSale/HitSale";

const Product = () => {

    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    },[]);

    if ('id' in product){
        return (
            <section className="product">
                <div className="container">
                    <div className="product__row">
                        <ProductSlider product={product}/>
                        <ProductInfo product={product}/>
                    </div>

                    <ProductDesc/>

                    <HitSale/>
                </div>
            </section>
        );
    } else {
         return <h2>Loading...</h2>
    }

};

export default Product;