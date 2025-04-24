import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { cars } from "../data/car.js";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Sedan"); // Default to "Sedan"

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

        <div
          className="nav nav-tabs mb-4 bg-white rounded-top justify-content-center"
          id="carTabs"
          role="tablist"
        >
          {["Sedan", "SUV", "Convertible"].map((tab) => (
            <a
              key={tab}
              className={`nav-item nav-link ${
                activeTab === tab ? "active custom-tab-active" : ""
              }`}
              id={`${tab}-tab`}
              onClick={() => setActiveTab(tab)}
              role="tab"
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                fontSize: activeTab === tab ? "1.15rem" : "1.05rem",
                fontWeight: activeTab === tab ? "600" : "500",
                borderRadius: "0.75rem 0.75rem 0 0",
                margin: "0 6px",
              }}
            >
              {tab}
            </a>
          ))}
        </div>

        <div className="tab-content mt-4">
          {activeTab === "Sedan" ? (
            <div
              className="tab-pane fade show active"
              id="Sedan"
              role="tabpanel"
            >
              <div className="row">
                {cars
                  .filter((car) => car.name.toLowerCase().includes("sedan"))
                  .map((car, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                      <div className="card h-100">
                        <div className="ratio ratio-4x3">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="card-img-top"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{car.name}</h5>
                          <p className="card-text">{car.description}</p>
                          <p className="card-text fw-bold">{car.price}</p>
                          <Button variant="primary" className="mt-auto">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div
              className="tab-pane fade show active"
              id={activeTab}
              role="tabpanel"
            >
              {cars
                .filter((car) => car.name === activeTab)
                .map((car, index) => (
                  <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                      <div className="ratio ratio-4x3">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="card-img-top"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="card-body d-flex flex-column p-4">
                        <h5 className="card-title fw-semibold mb-2">
                          {car.name}
                        </h5>
                        <p
                          className="card-text text-muted mb-1"
                          style={{ minHeight: "60px" }}
                        >
                          {car.description}
                        </p>
                        <p className="card-text fw-bold text-primary mb-3">
                          {car.price}
                        </p>
                        <Button
                          variant="primary"
                          className="mt-auto w-100 rounded-pill"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
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
