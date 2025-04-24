import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { cars } from "../data/car.js";
import logo from "../images/logoto.png";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Sedan");

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="SRSR Logo"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              marginLeft: "12px",
            }}
          />
          <strong>SRSRLEMOSAIN</strong>
        </div>
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
        <h5 className="display-5 mb-4">Specify Your Transportation Method</h5>

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

        {/* Company Information Section */}
        <section className="company-info mt-5 p-4 bg-light rounded shadow-sm">
          <div className="container">
            <h2 className="h4 mb-4 text-center text-primary">
              About SRSR Group LLC
            </h2>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  SRSR Group LLC is a leading transportation service provider
                  based in California, USA. Established with the vision of
                  offering reliable and luxurious transportation options, we
                  specialize in providing a wide range of vehicles, including
                  Sedans, SUVs, and Convertibles.
                </p>
                <p>
                  Our mission is to ensure customer satisfaction by delivering
                  top-notch services and maintaining a fleet of well-maintained
                  vehicles. Whether you're planning a city ride, an off-road
                  adventure, or a stylish drive, SRSR Group LLC has the perfect
                  vehicle for you.
                </p>
              </div>
              <div className="col-12 col-md-6 text-center">
                <i
                  className="fas fa-building text-primary"
                  style={{ fontSize: "100px" }}
                ></i>
              </div>
            </div>
            <h3 className="h5 mt-5 text-center text-secondary">
              Owner Information
            </h3>
            <div className="row mt-4">
              <div className="col-12 col-md-4 text-center">
                <i
                  className="fas fa-user-tie text-primary"
                  style={{ fontSize: "80px" }}
                ></i>
                <h5 className="text-primary mt-3">John Doe</h5>
                <p className="text-muted small">Founder & CEO</p>
              </div>
              <div className="col-12 col-md-8">
                <p>
                  SRSR Group LLC was founded by John Doe, a visionary
                  entrepreneur with over 15 years of experience in the
                  transportation industry. John's dedication to excellence and
                  his passion for innovation have been the driving forces behind
                  the company's success.
                </p>
                <p>
                  Under John's leadership, SRSR Group LLC has grown to become a
                  trusted name in the industry, known for its commitment to
                  quality and customer satisfaction. His vision has helped the
                  company achieve milestones in providing reliable and luxurious
                  transportation services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-light text-center p-4">
        <h2 className="h5 mb-2">Contact Us</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span>📞 +1 (571) 2849330</span>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span>📧 support@rentmyride.com</span>
        </div>
        <p className="text-muted small">
          © 2025 SRSR group LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
