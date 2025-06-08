import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
const Login = ({ onSwitchToRegister, onRegisterSuccess }) => {
  const navigate = useNavigate();

  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        if (onRegisterSuccess) onRegisterSuccess();
        navigate("/dashboard");
      } catch (err) {
        setErrorMessage(err.message || "Login failed.");
        setIsSigningIn(false);
      }
      // doSendEmailVerification()
    }
  };
  return (
    <>
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

      <div style={{ background: "transparent", height: "" }}>
        <Card
          className="p-3"
          aria-label="Register Card"
          style={{
            border: "none",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            background: "rgba(255, 255, 255, 0.95)",
            // backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            borderRadius: "1.25rem",
            // border: "1px solid rgba(255, 255, 255, 0.18)",
            maxWidth: "400px",
            margin: "auto",
            marginTop: "100px",
            padding: "20px",
          }}
        >
          <Card.Body>
            <h2 className="mb-4 text-center text-primary fw-bold">Sign In</h2>
            <Form autoComplete="off">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoFocus
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                />
              </Form.Group>

              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}

              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-pill fw-semibold shadow-sm"
                style={{ letterSpacing: "1px" }}
                onClick={onSubmit}
              >
                Sign In
              </Button>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="me-2 text-muted">Don't have an account? </span>
                <button
                  type="button"
                  className="btn btn-link p-0 fw-semibold"
                  style={{ textDecoration: "underline" }}
                  onClick={onSwitchToRegister}
                  tabIndex={0}
                >
                  Sign up{" "}
                </button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
