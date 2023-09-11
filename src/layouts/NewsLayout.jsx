import React from "react";
import Header from "../pages/Shared/Header/Header.jsx";
import Footer from "../pages/Shared/Footer/Footer.jsx";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav.jsx";
import RightNav from "../pages/Shared/RightNav/RightNav.jsx";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
      <Header></Header>
      <Container>
                <Row>
                        <Col lg={9}>
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

export default NewsLayout;