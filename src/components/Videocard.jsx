import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Videocard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?rs=1&pid=ImgDetMain" />
        <Card.Body className="d-flex justify-content-between">
          <Card.Title className="mt-2">Breaking Bad</Card.Title>
         
          <Button variant="danger"><i class="fa-solid fa-trash"></i></Button>
        </Card.Body>
      </Card>
    </div>
  );
}
