import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav,  Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center my-5">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <h5 className="">Journalism Without Fear or Favor</h5>
        </p>
        <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
      <div className="d-flex my-4 bg-light p-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100} pauseOnClick>
          React Fast Marquee is a lightweight React component that harnesses the
          power of CSS animations to create silky smooth marquees.What is the
          Marquee effect?Marquee is a special effect that is used to move or
          scroll the content horizontally across and vertically down ...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
