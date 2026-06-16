import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
  return (
    <div className="container my-1">
      <div className="row align-items-center">
        
        {/* Left Text */}
        <div className="col-md-6">
          <h2 className="text-primary mb-3" style={{ fontSize: "24px" }}>
            Who we are?
          </h2>

          <p>
            FixMate Home Service is your trusted partner for reliable, affordable, and professional home maintenance solutions. 
            We provide end-to-end services to keep your home safe, functional, and comfortable handled by skilled technicians who value quality and transparency. 
            From electrical and plumbing work to appliance repairs and general maintenance.
          </p>

          <h5 className="text-primary mt-3 mb-2" style={{ fontSize: "20px" }}>
            Why Choose FixMate?
          </h5>

          <ul className="list-unstyled mb-1">
            <li className="fw-bold mb-2">✔ Skilled & verified technicians</li>
            <li className="fw-bold mb-2">✔ On-time, reliable service</li>
            <li className="fw-bold mb-2">✔ Transparent pricing</li>
            <li className="fw-bold mb-2">✔ Quality workmanship</li>
            <li className="fw-bold mb-2">✔ Customer satisfaction guaranteed</li>
          </ul>

          {/* Location Section (no extra gap) */}
          <h5 className="text-primary mt-0 mb-2">
            Our Service Available On
          </h5>

          <ul className="list-unstyled">
            <li>📍 Erode</li>
            <li>📍 Coimbatore</li>
            <li>📍 Selam</li>
            <li>📍 Chennai</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="about.jfif"
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

      </div>
    </div>
  );
};
