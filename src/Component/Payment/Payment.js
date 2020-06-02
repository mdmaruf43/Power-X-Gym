import React from 'react'
import './Payment.css'
import masterCard from '../../Images/credit-cards_mastercard.png'
import visaCard from '../../Images/credit-cards_visa.png'
import anotherCard from '../../Images/credit-cards_amex.png';
import paypal from '../../Images/Bitmap.png'
function Payment() {
    return (
        <div className="container pt-2">
            <div className="container heightWidth pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ">
                            <h3>Credit Card </h3>
                            <p>Safe money trasfer using your bank accout. Visa, Mestro, Discover, American Express</p>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-end">
                                <div className="m-1">
                                    <img src={masterCard} alt="masterCard"/>
                                </div>
                                <div className="m-1">
                                    <img src={visaCard} alt="visaCard"/>
                                </div>
                                <div className="m-1">
                                    <img src={anotherCard} alt="anotherCard"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="cardNumber">Card Number</label>
                        <input type="number" class="form-control" id="cardNumber" placeholder="0000 0000 0000 0000"/>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">NAME ON CARD</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputState">EXPIRY DATE</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="birthday"
                                name="date"
                            />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputZip">CVV CODE</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <div className='container heightWidth'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ">
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    PayPal
                                </label>
                                </div>
                            </div>
                                <h3>PayPal</h3>
                                <p>You will be redirected to PayPal website to complete your purchase securely.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-end">
                                    <div className="m-1">
                                        <img src={paypal} alt="masterCard"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end pt-2">
                <button className="btn btn-warning"> <a style={{textDecoration: 'none'}} href="/paypal">Next</a></button>
            </div>
        </div>
    )
}

export default Payment
