import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Row>
            <Col md={4} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <LinkContainer to="/chat">
                        <Button variant="outline-warning">
                            Zacznij już teraz!
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
    );
}

export default Home;
