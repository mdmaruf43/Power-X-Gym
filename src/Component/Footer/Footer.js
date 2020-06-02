import React from 'react';
import './Footer.scss';
import youtube from '../../Images/bxl-youtube.png';
import fb from '../../Images/bxl-facebook.png';
import instra from '../../Images/bxl-instagram.png';
import twiter from '../../Images/bxl-twitter.png';
import whatsapp from '../../Images/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a className="text-white" href="/">POWER <span className="logoX">X</span></a>
                    </div>
                    <div className="col-md-3">
                    <h5><a className="text-white" href="/">Need Help?</a></h5>
                    <h5><a className="text-white" href="/">Help Center</a></h5>
                    <h5><a className="text-white" href="/">Email Support</a></h5>
                    <h5><a className="text-white" href="/">Live Chat</a></h5>
                    <h5><a className="text-white" href="/">Gift Certificates</a></h5>
                    <h5><a className="text-white" href="/">Send Us Feedback</a></h5> 

                    </div>
                    <div className="col-md-2 ">
                        <h5><a className="text-white" href="/">Digital Resources</a></h5>
                        <h5><a className="text-white" href="/">Articles</a></h5>
                        <h5><a className="text-white" href="/">E-books</a></h5>
                    </div>
                    <div className="col-md-2 text-white socialLogo">
                        <h5>Connect with Us</h5>
                        <a href="/"><img src={youtube}alt=""/></a>
                        <a href="/"><img src={fb} alt=""/></a>
                        <a href="/"><img src={instra} alt=""/></a>
                        <a href="/"><img src={twiter} alt=""/></a>
                        <a href="/"><img src={whatsapp} alt=""/></a>
                        <a className="text-white" href="/">Forums</a>
                    </div>
                    <div className="col-md-2 text-white ">
                        <h5>Join Our Newsletter</h5>
                        <h6>Get exclusive news, features, and updates from the Shredder Weight Loss Academy</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;