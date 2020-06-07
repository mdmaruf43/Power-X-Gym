import React from 'react';
import './Workout.scss';
import group80 from '../../Images/Group 80.png';
import group81 from '../../Images/Group 81.png';
import group82 from '../../Images/Group 82.png';

const Workout = () => {
    return (
        <div className="container workOut d-flex align-items-center">
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body img-1 d-flex align-items-center ">
                            <div>
                                <img src={group80} alt="" />
                                <h2 className="card-title">PROGRESSION</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body img-2 d-flex align-items-center">
                            <div>
                                <img src={group81} alt="" />
                                <h2 className="card-title text-warning">WORKOUT</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body img-3 d-flex align-items-center">
                            <div>
                                <img src={group82} alt="" />
                                <h2 className="card-title">NUTRITION</h2>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Workout;