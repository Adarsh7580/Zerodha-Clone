import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row align-items-center'>
                
                {/* Left Image */}
                <div className='col-6'>
                    <img 
                      src='media/images/largestBroker.svg' 
                      alt="Largest Broker"
                      className='img-fluid'
                    />
                </div>

                {/* Right Content */}
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>

                    <p>
                      2+ million Zerodha clients contribute to over 15% of all retail order volumes 
                      in India daily by trading and investing:
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img 
                      src='media/images/pressLogos.png' 
                      alt="Press Logos"
                      className='img-fluid mt-3'
                    />
                </div>

            </div>
        </div>
    );
}

export default Awards;
