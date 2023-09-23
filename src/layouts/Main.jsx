import React from "react";
import Header from "../pages/Shared/Header/Header.jsx";
import Footer from "../pages/Shared/Footer/Footer.jsx";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav.jsx";
import RightNav from "../pages/Shared/RightNav/RightNav.jsx";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar.jsx";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
                <Row>
                        <Col lg={3}>
                                <LeftNav></LeftNav>
                        </Col>
                        <Col lg={6}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                                <RightNav></RightNav>
                        </Col>
                </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
