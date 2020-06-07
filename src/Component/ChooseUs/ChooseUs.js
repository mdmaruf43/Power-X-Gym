import React from 'react';
import './ChooseUs.scss';
import group87 from '../../Images/Group 87.png';
import group88 from '../../Images/Group 88.png';
import gitf2 from '../../Images/gift-2.png';

const ChooseUs = () => {
    return (
        <div className="container workOut">
            <h3 className="d-flex justify-content-center choose">WHY <span className="text-warning">CHOOSE US</span></h3>
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body d-flex align-items-center cardStyle ">
                            <div>
                                <img src={group87} alt="" />
                                <h6 className="card-title">FREE FITNESS TRAINING</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center cardStyle">
                            <div>
                                <img src={group88} alt="" />
                                <h6 className="card-title text-warning">TONS OF CARDIO AND STRENTH</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center cardStyle">
                            <div>
                                <img src={gitf2} alt="" />
                                <h6 className="card-title">NO COMMITMENT MEMBERSHIPS</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;