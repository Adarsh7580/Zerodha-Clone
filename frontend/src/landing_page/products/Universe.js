import React from 'react';

function Universe() {
  return ( 
    <div className="container mt-5">

      {/* Heading Row */}
      <div className="row text-center gx-5 gy-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Grid Row */}
      <div className="row text-center">

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid universe-logo"/>
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid universe-logo"/>
          <p className="text-muted">
            Our asset management venture creating simple and transparent index funds.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="img-fluid universe-logo"/>
          <p className="text-muted">
            Options trading platform for strategies and analytics.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="img-fluid universe-logo"/>
          <p className="text-muted">
            Systematic trading platform without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" className="img-fluid universe-logo"/>
          <p className="text-muted">Insurance</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" className="img-fluid universe-logo"/>
          <p className="text-muted">Bonds trading platform</p>
        </div>
        <br/><br/>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
                

      </div>

    </div>
  );
}

export default Universe;
