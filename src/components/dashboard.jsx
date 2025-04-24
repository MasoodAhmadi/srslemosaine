import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { cars } from "../data/car.js";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(cars[0].name); // Default to the first car

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-brand">SRSLEMOSAIN</div>
        <div className="navbar-nav ml-auto">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      <main className="flex-grow-1 p-4">
        <h1 className="display-3 mb-4">Choose Your Ride</h1>

        <div className="nav nav-tabs" id="carTabs" role="tablist">
          {cars.map((car) => (
            <a
              key={car.name}
              className={`nav-item nav-link ${
                activeTab === car.name ? "active" : ""
              }`}
              id={`${car.name}-tab`}
              onClick={() => setActiveTab(car.name)}
              role="tab"
            >
              {car.name}
            </a>
          ))}
        </div>

        <div className="tab-content mt-4">
          {cars.map((car) => (
            <div
              key={car.name}
              className={`tab-pane fade ${
                activeTab === car.name ? "show active" : ""
              }`}
              id={car.name}
              role="tabpanel"
            >
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid mb-3"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                  <p className="card-text">{car.description}</p>
                  <p className="card-text font-weight-bold">{car.price}</p>
                  <Button variant="primary">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer id="contact" className="bg-light text-center p-4">
        <h2 className="h5 mb-2">Contact Us</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span>📞 +1 (555) 123-4567</span>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span>📧 support@rentmyride.com</span>
        </div>
        <p className="text-muted small">
          © 2025 RentMyRide. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
