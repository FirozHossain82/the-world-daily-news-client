import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate('/category/0');
        form.reset();
        setError("");
        toast.success("Login Successfully", {
          position: "top-center",
          autoClose: 500,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Container>
        <h2 className="text-center mt-4 fs-2">Please Login...</h2>
        <Row className="justify-content-center mt-5">
          <Col md={5}>
            <Card
              style={{
                borderRadius: "25px", // Rounded corners for the card
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // White shadow for the card
              }}
            >
              <Card.Body style={{ padding: "55px" }}>
                <Card.Title className="text-center fs-3 my-4">
                  Login your account
                </Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="my-3 fs-5">Email address</Form.Label>
                    <Form.Control
                      className="p-3 mb-3"
                      type="email"
                      name="email"
                      placeholder="Enter your  email address"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="mb-2 fs-5">Password</Form.Label>
                    <Form.Control
                      className="p-3"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      backgroundColor: "white", // White background color for the button
                      borderRadius: "25px", // Rounded corners for the button
                      color: "black", // Text color
                      fontWeight: "bold", // Bold text
                      width: "100%", // Make the button full-width
                      padding: "10px",
                      marginTop: "20px",
                    }}
                  >
                    Login
                  </Button>
                  <Form.Text className="text-success text-center fs-6 ">
                    Don't Have an Account? <Link to="/register">Register</Link>
                  </Form.Text>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
