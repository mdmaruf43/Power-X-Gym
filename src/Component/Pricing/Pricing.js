import React from 'react';
import './Pricing.scss';
import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
        <div className="container workout">
            <h3 className="d-flex justify-content-center TEXT"><span className='text-warning'>CHOOSE THE OFFER</span> THAT SUITS YOU</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center pricing-card">
                        <div className="card-body img-1  d-flex align-items-center justify-content-center ">
                            <div>
                                <h4 className="text-warning">BILLED MONTHLY</h4>
                                <h2 className="card-title">ADVANCE PLAN</h2>
                                <h1 className="card-title text-warning">$140</h1>
                                <h6>Mobile-Optimized</h6>
                                <h6>Best Hosting</h6>
                                <h6>Free Custom</h6>
                                <h6>Outstanding</h6>
                                <h6>Happy Customer</h6>
                                <Link to={"/Membership"}><button className="btn-warning btn">PURCHASE</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center pricing-card">
                        <div className="card-body img-1 d-flex align-items-center justify-content-center">
                            <div>
                                <h4 className="text-warning">BILLED MONTHLY</h4>
                                <h2 className="card-title">Basic PLAN</h2>
                                <h1 className="card-title text-warning">$120</h1>
                                <h6>Mobile-Optimized</h6>
                                <h6>Best Hosting</h6>
                                <h6>Free Custom</h6>
                                <h6>Outstanding</h6>
                                <h6>Happy Customer</h6>
                                <Link to={"/Membership"}><button className="btn-warning btn">PURCHASE</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center pricing-card">
                        <div className="card-body img-1 d-flex align-items-center justify-content-center">
                            <div>
                                <h4 className="text-warning">BILLED MONTHLY</h4>
                                <h2 className="card-title">BEGINERS</h2>
                                <h1 className="card-title text-warning">$90</h1>
                                <h6>Mobile-Optimized</h6>
                                <h6>Best Hosting</h6>
                                <h6>Free Custom</h6>
                                <h6>Outstanding</h6>
                                <h6>Happy Customer</h6>
                                <Link to={"/Membership"}><button className="btn-warning btn">PURCHASE</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;