import React from 'react';
import './Training.scss';

const Training = () => {
    return (
        <div className="container workout">
            <h3 className="d-flex justify-content-center">TRAINING <span className="text-warning">PROGRAMS</span></h3>
            <div className="row ">
                <div className="col-md-6 training">
                    <div className="card text-center">
                        <div className="card-body trainingImage1 d-flex align-items-center">
                            <div className="bg-warning bg">
                                YOGA TRAINING SESSION -->
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 training">
                    <div className="card text-center">
                        <div className="card-body trainingImage2 d-flex align-items-center">
                            <div className="bg-warning bg">
                                CARDIO TRAINING SESSION -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;