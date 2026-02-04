import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3 py-4">
      <div className="row py-4 justify-content-between align-items-center">
        <div className="col-6 p-5">
          <img src={imageURL} className="img-fluid" />
        </div>
    
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft: "50px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" style={{marginLeft: "50px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
