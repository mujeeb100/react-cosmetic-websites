import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SP1 from "../../assets/img/brand/sp1.jpg";
import SP2 from "../../assets/img/brand/sp2.jpg";
import SP3 from "../../assets/img/brand/sp3.jpg";
import SP4 from "../../assets/img/brand/sp4.jpg";
// import '../ServicesDermatology/servicedermaatology.css'

export default function ServiceSergary() {
  return (
    <div className="container">
      <div className="row mb-4 mt-5">
        <h1 class="section-title mb-3"> SERVICES </h1>
        <h1 class="section-dermatology mb-4"> PLASTIC SURGERY </h1>
        <div className="col-md-3">
          
          <Card className="card-border" style={{ width: "18rem" }}>
            
            <Card.Img variant="top" src={SP1} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="s1">NON HEALING WOUND MANAGEMENT
              <style type="text/css">
            {`
    .s1 {
      color:#9e289e;
    }
    .card-border-radius {
      border-style: none;
    }

    `}
          </style>
              </Card.Title>
              <Card.Text>
                Long time Non-healing wound can be a cause of concern due to
                various Finding and treating the causative factor is of utmost
              </Card.Text>
              <Button className="card-button"  variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          </div>
        
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SP2} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="s1">SCAR MANAGEMENT</Card.Title>
              <Card.Text>
                Post Surgical scars can be managed by multiple surgical
                procedures like Z-Plasty, X-Plasty, W-Plasty etc, to minimize
                the Scars.
              </Card.Text>
              <Button className="card-button"  variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SP3} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="s1">TRAUMA-HAND/FACE</Card.Title>
              <Card.Text>
                Injury to the hand / forearm / arm in form of sharp cut by sharp
                objects like broken glass, knife or crush injury of hand by
                heavy machines can cause damage to vital structures like
                muscles,
              </Card.Text>
              <Button className="card-button"  variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SP4} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="s1">BURNS-SCAR/CONTRACTURE TREATMENT</Card.Title>
              <Card.Text>
                Unfortunately, Acute burns management has been very neglected
                part of treatment in
              </Card.Text>
              <Button className="card-button"  variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
