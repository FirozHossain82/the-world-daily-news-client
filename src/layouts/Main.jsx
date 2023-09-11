import React from "react";
import Header from "../pages/Shared/Header/Header.jsx";
import Footer from "../pages/Shared/Footer/Footer.jsx";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav.jsx";
import RightNav from "../pages/Shared/RightNav/RightNav.jsx";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
                <Row>
                        <Col lg={3}>
                                <LeftNav></LeftNav>
                        </Col>
                        <Col lg={6}>
                            <h2>Main Content Coming</h2>
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
