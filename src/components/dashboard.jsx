import React from "react";
// import { Button } from "react-bootstrap";
// import { cars } from "../data/car.js";
// import logo from "../images/logoto.png";
import {
  bWiInternational,
  dullesInternationa,
  reganInternational,
} from "../data/link";

import sedanImage from "../images/jac1.jpg";
import profileImage from "../images/srsprofile.png";
import NavBar from "./navbars";

export default function Dashboard() {
  // const [activeTab, setActiveTab] = useState("Sedan");

  return (
    <div className="">
      <NavBar />

      <main className="">
        <section className="mb-5">
          <div>
            <img
              src={profileImage}
              alt="Profile"
              className="mb-3"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover", // Ensures the image covers the full width
              }}
            />
          </div>
        </section>
        <h2 className="d-flex justify-content-center display-5 mb-0">
          <strong
            style={{
              fontSize: "2rem", // Keeps the large size
              textTransform: "uppercase", // Uppercase for a modern look
              background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
              "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
              color: "transparent", // Makes the text color transparent so the gradient shows
              fontWeight: "bold", // Ensures the text is bold
              letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
              fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
            }}
          >
            Price list
          </strong>
        </h2>

        <p
          className="d-flex justify-content-center align-items-center mb-4"
          style={{
            fontSize: "1rem", // Smaller font size for the paragraph text
            color: "#333", // Normal dark text color
            fontFamily: "'Roboto', sans-serif", // Ensures the same font family for consistency
            fontWeight: "normal", // Normal weight for paragraph text
            textAlign: "center", // Centers the paragraph text
            marginTop: "0", // Removes extra margin that could cause unwanted gap
          }}
        >
          Washington DC and Northern VA
        </p>

        {/* Pricing Section */}
        <div
          id="pricing"
          className="d-flex flex-row justify-content-center align-items-start gap-4 my-5 flex-wrap"
        >
          {/* Sedan */}
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2
                className="d-flex justify-content-center display-5 mb-4"
                style={{
                  fontSize: "1rem", // Keeps the large size
                  textTransform: "uppercase", // Uppercase for a modern look
                  background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                  "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                  color: "transparent", // Makes the text color transparent so the gradient shows
                  fontWeight: "bold", // Ensures the text is bold
                  letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                  fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
                }}
              >
                <strong>Sedan</strong>
              </h2>{" "}
              <img
                src={sedanImage}
                alt="Sedan"
                className="img-fluid mb-3"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
              <ul className="list-unstyled">
                <li>Hourly Rate: $75</li>
                <li>Minimum Booking: 2 hours</li>
                <li>Additional Hours: $70/hour</li>
              </ul>
            </div>
          </div>

          {/* SUV */}
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2
                className="d-flex justify-content-center display-5 mb-4"
                style={{
                  fontSize: "1rem", // Keeps the large size
                  textTransform: "uppercase", // Uppercase for a modern look
                  background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                  "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                  color: "transparent", // Makes the text color transparent so the gradient shows
                  fontWeight: "bold", // Ensures the text is bold
                  letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                  fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
                }}
              >
                <strong>SUV</strong>
              </h2>{" "}
              <img
                src={sedanImage}
                alt="SUV"
                className="img-fluid mb-3"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
              <ul className="list-unstyled">
                <li>Hourly Rate: $85</li>
                <li>Minimum Booking: 2 hours</li>
                <li>Additional Hours: $80/hour</li>
              </ul>
            </div>
          </div>

          {/* Van */}
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h2
                className="d-flex justify-content-center display-5 mb-4"
                style={{
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  background: "linear-gradient(45deg, #FFD700, #000000)",
                  "-webkit-background-clip": "text",
                  color: "transparent",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                <strong>VAN</strong>
              </h2>{" "}
              <img
                src={sedanImage}
                alt="Van"
                className="img-fluid mb-3"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
              <ul className="list-unstyled">
                <li>Hourly Rate: $180</li>
                <li>Minimum Booking: 2 hours</li>
                <li>Additional Hours: $170/hour</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Airport Section */}
        <h2
          className="text-center mb-5 display-5"
          style={{
            fontSize: "2rem", // Keeps the large size
            textTransform: "uppercase", // Uppercase for a modern look
            background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
            "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
            color: "transparent", // Makes the text color transparent so the gradient shows
            fontWeight: "bold", // Ensures the text is bold
            letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
            fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
          }}
        >
          Airports
        </h2>
        <div className="row">
          {/* IAD */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 h-100 text-center">
              <img
                src={dullesInternationa}
                alt="IAD"
                className="card-img-top p-3"
                style={{ maxHeight: "120px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "2rem", // Keeps the large size
                    textTransform: "uppercase", // Uppercase for a modern look
                    background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                    "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                    color: "transparent", // Makes the text color transparent so the gradient shows
                    fontWeight: "bold", // Ensures the text is bold
                    letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                    fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
                  }}
                >
                  IAD
                </h5>
                <p>Standard prices to DC</p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Sedan:</strong> $100
                  </li>
                  <li>
                    <strong>SUV:</strong> $140
                  </li>
                  <li>
                    <strong>Sprinter Van:</strong> $220
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DCA */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 h-100 text-center">
              <img
                src={reganInternational}
                alt="DCA"
                className="card-img-top p-3"
                style={{ maxHeight: "120px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "2rem", // Keeps the large size
                    textTransform: "uppercase", // Uppercase for a modern look
                    background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                    "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                    color: "transparent", // Makes the text color transparent so the gradient shows
                    fontWeight: "bold", // Ensures the text is bold
                    letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                    fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
                  }}
                >
                  DCA
                </h5>
                <p>Standard prices to DC</p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Sedan:</strong> $75
                  </li>
                  <li>
                    <strong>SUV:</strong> $85
                  </li>
                  <li>
                    <strong>Sprinter Van:</strong> $180
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BWI */}
          <div className="col-md-4 mb-4">
            <div className="card border-0 h-100 text-center">
              <img
                src={bWiInternational}
                alt="BWI"
                className="card-img-top p-3"
                style={{ maxHeight: "120px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "2rem", // Keeps the large size
                    textTransform: "uppercase", // Uppercase for a modern look
                    background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                    "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                    color: "transparent", // Makes the text color transparent so the gradient shows
                    fontWeight: "bold", // Ensures the text is bold
                    letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                    fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
                  }}
                >
                  BWI
                </h5>
                <p>Standard prices to DC</p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Sedan:</strong> $165
                  </li>
                  <li>
                    <strong>SUV:</strong> $185
                  </li>
                  <li>
                    <strong>Sprinter Van:</strong> $280
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <section className="company-info mt-5 p-4 bg-light rounded shadow-sm">
          <div className="container">
            <h2
              className="h4 mb-4 text-center"
              style={{
                fontSize: "2rem", // Keeps the large size
                textTransform: "uppercase", // Uppercase for a modern look
                background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                color: "transparent", // Makes the text color transparent so the gradient shows
                fontWeight: "bold", // Ensures the text is bold
                letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
              }}
            >
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
            <h3
              className="h5 mt-5 text-center"
              style={{
                fontSize: "1rem", // Keeps the large size
                textTransform: "uppercase", // Uppercase for a modern look
                background: "linear-gradient(45deg, #FFD700, #000000)", // Gradient from gold to black
                "-webkit-background-clip": "text", // Ensures the gradient is applied to the text
                color: "transparent", // Makes the text color transparent so the gradient shows
                fontWeight: "bold", // Ensures the text is bold
                letterSpacing: "1px", // Adds some spacing between the letters for a more dramatic effect
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow for depth
                fontFamily: "'Roboto', sans-serif", // Modern, clean font for a polished feel
              }}
            >
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
