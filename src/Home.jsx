import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-primary fw-bold display-5">
            Home Service @ Your Doorstep
          </h1>

          <h4 className="mt-3">
            24 / 7 / 365 Days Door Step Services for your Home Appliances!!!
          </h4>

          <p className="mt-3 text-muted">
            At Home Service Care we understand how important it is to get your
            home appliances back in working order again as quickly as possible.
          </p>

      <button className="btn btn-primary btn-lg mt-3">
      Call for Service – 0442 180 1111
</button>

        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="/Handyman service.jpeg"
            alt="Handyman Service"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};
