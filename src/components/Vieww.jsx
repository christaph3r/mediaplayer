import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Videocard from "./Videocard";

export default function Vieww() {
  return (
    <>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard/>
        </Col>
      </Row>
    </>
  );
}
