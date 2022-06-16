import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AP1 from "../../assets/img/brand/a1.jpg";
import AP2 from "../../assets/img/brand/a2.jpg";
import AP3 from "../../assets/img/brand/a3.png";
import AP4 from "../../assets/img/brand/a4.jpg";

export default function ServiceAesthetic() {
  return (
    <div className="container">
      <div className="row mb-4 mt-5">
        <h1 class="section-title mb-3"> SERVICES </h1>
        <h1 class="section-dermatology mb-4"> PLASTIC SURGERY </h1>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={AP1} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="ps1">HAIR RESTORATION
              <style type="text/css">
            {`
    .ps1 {
      color:#9e289e;
    }
    .card-button{
      background-color: #d26e4b;
      border-radius:20px;
    }
    `}
          </style>
              
              
              
              
              
              </Card.Title>
              <Card.Text>
                Hair transplantation is a very popular surgical technique of
                harvesting healthy hair follicles from one part of the body,
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={AP2} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="ps1">BOTOX / FILLERS</Card.Title>
              <Card.Text>
                With advancing age, skin looses its elasticity, smooth shiny
                texture and glow. Other factors like stress, workaholic life,
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={AP3} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="ps1">TBODY CONTOURING</Card.Title>
              <Card.Text>
                Various procedures can be done for reshaping and contouring the
                body as per patients personal needs e.g.- Obesity, Body
                Dysmorphic disorder etc or
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={AP4} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="ps1">BREAST RECONSTRUCTION</Card.Title>
              <Card.Text>
                Breast Cancer Surgery is done for removing cancerous breast
                tissue which can form defects in
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
