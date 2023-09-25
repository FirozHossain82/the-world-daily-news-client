import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import useTitle from "../../../hooks/useTitle.jsx";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useTitle('Register')

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    //Validation
    setError("");
    setSuccess("");

      if(!/(?=.*[A-Z])/.test(password)){
      setError('Please at least one uppercase  letter')
      return;
    }
    else if(!/(?=.*[!@#$&*])/.test(password)){
      setError('Please add one special letter');
      return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
      setError('Please add at lease two number');
      return;
    }
    else if(password.length<6){
      setError('Please add at least 6 character');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setError("");
        toast.success("User has been created  successfully", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
        });
        updateUserData(result.user, name, photo);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateUserData = (user, name, photo) =>{
    updateProfile(user, {
      displayName:name,
      photoURL:photo
    })
    .then(() =>{
      console.log('Profile Updated')
    })
    .catch((error) =>{
      console.log(error);
      setError(error.message);
    })
  }


  const handleAccepted =(event) =>[
    setAccepted(event.target.checked)
  ]

  return (
    <div>
      <Container style={{ marginBottom: "50px" }}>
      <h2 className="text-center mt-2 fs-2">Please Register...</h2>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <Card
            style={{
              borderRadius: "25px", // Rounded corners for the card
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // White shadow for the card
            }}
          >
            <Card.Body style={{ padding: "25px", marginBottom: "25px" }}>
              <Card.Title className="text-center fs-3 my-1">
                Register your account
              </Card.Title>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicName">
                  <Form.Label className="my-2 fs-5">Your Name</Form.Label>
                  <Form.Control
                    className="p-3 mb-3"
                    type="text"
                    name="name"
                    placeholder="Enter your  name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="my-2 fs-5">Photo URL</Form.Label>
                  <Form.Control
                    className="p-3 mb-3"
                    type="text"
                    name="photo"
                    placeholder="Enter your  photo url"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="my-2 fs-5">Email address</Form.Label>
                  <Form.Control
                    className="p-3 mb-3"
                    type="email"
                    name="email"
                    required
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
                    required
                  />
                </Form.Group>
                <div className="mb-2 mt-0">
                  <p className="fs-5 fw-normal text-danger">{error}</p>
                  <p className="fs-5 fw-medium text-success">{success}</p>
                </div>
                <Form.Group className="mb-0 mt-2" controlId="formBasicCheckbox">
                  <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    name="accept"
                    label={<>Accept <Link to='/terms'> Terms & Condition</Link></>}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={!accepted}
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
                  Register
                </Button>
                <Form.Text className="text-success text-center fs-5 ">
                  Have an Account? <Link to="/login">Login</Link>
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

export default Register;
