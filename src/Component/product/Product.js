import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {category}= props.product;
    return (
        <div className="col-md-4">
            <div className="card text-center card-Style">
                <div className={"card-body image" + props.index}>
                    <div className="bg-warning bg-style">
                        <Link to={"/productDetails/"+category}>{category}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;