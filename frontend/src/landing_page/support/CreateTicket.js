import React from 'react';

function CreateTicket() {
    return (  
        <div className='container'>
            <div className='row p-5 mt-3 mb-3'>
                <h1 className="fs-2 text-center">To create a ticket, select a relevant topic</h1>
            </div>
        <div className='row'>

            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className=""><i class="fa-solid fa-plus"></i>Account Opening</h4>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Open demat account</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Minor demat account</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>NRI demat account</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Commodity</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Dematerialisation</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Fund transfer</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>MTF</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Referral program</a><br/>
            </div>
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className=""><i class="fa-solid fa-user"></i>Your Zerodha Account</h4>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Login Credentials</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Account Modification and Segement Addition</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>DP ID and bank details</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Tranfer and conversion of shares</a><br/>
            </div>
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className=""><i class="fa-solid fa-chart-area"></i>Your Zerodha Account</h4>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Margin/leverage, Product and Order types</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Kite Web and Mobile</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Trading FAQs</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Corporate Actions</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Sentinel</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Kite API</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Pi and other platforms</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>Stockreports+</a><br/>
                <a href =""style={{ textDecoration:"none", lineHeight:"2"}}>GTT</a><br/>
            </div>
         </div>
    </div>
    );
}

export default CreateTicket;