import React, { useState, useEffect } from 'react';
import './Classes.scss';
import Product from '../product/Product';

const Classes = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-hamlet-41338.herokuapp.com/products')
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
    }, [])

    let i = 1;
    return (
        <div className="container">
            <div className="row">
                {
                    product.map(product => <Product key={product._id} product={product} index ={i++}></Product>)
                }
            </div>
        </div>
    );
};

export default Classes;