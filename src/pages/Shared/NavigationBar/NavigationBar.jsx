import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider.jsx";

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext);


  const  handleLogout = ( ) =>{
      logOut()
      .then(() =>{

      })
      .catch((error) =>{
        console.log(error.message)
      })
  }
 

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-3">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mx-auto">
              <Link
                className="text-decoration-none fs-5 text-primary-emphasis me-4 "
                to="/category/0"
              >
                Home
              </Link>

              <Link
                to="/"
                className="text-decoration-none fs-5 text-primary-emphasis me-4 "
              >
                About
              </Link>
              <Link
                to="/"
                className="text-decoration-none fs-5 text-primary-emphasis "
              >
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogout} variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
