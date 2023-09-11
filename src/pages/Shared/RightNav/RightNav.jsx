import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import QZone from "../QZone/QZone.jsx";
import bg from '../../../assets/bg.png';
const RightNav = () => {
  return (
    <div>
      <h3 className="mt-2">Login With</h3>
      <Button className="my-3" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-info">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="my-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <Link className="pl-3" to="https://www.facebook.com/">
              <FaFacebook className="" />
              Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="https://twitter.com/">
              <FaTwitter className="fw-bold" />
              Twitter
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="fw-bold  text-decoration-none" />
              Instagram
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
            <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
