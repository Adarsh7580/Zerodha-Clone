import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* Top bar */}
      <div className="container">
        <div className="row p-5 align-items-center">

          <div className="col-6">
            <h4>Support Portal</h4>
          </div>

          <div className="col-6 text-end">
            <a href="">Track Tickets</a>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="row p-5 align-items-center">

          {/* Left */}
          <div className="col-6">

            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input placeholder="Eg. how do I activate F&O" />

            <div className="d-flex gap-3 mt-3 flex-wrap">
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>

          </div>

          {/* Right */}
          <div className="col-6">

            <h1 className="fs-3">Featured</h1>

            <ol>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;