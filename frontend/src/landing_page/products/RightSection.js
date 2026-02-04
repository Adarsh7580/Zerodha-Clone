import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (
    <div className="container mt-3 py-4">
      <div className="row py-4 justify-content-between align-items-center">
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
