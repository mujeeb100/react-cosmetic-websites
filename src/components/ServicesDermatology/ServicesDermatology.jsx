import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import S1 from "../../assets/img/brand/s1.jpg";
import S2 from "../../assets/img/brand/s2.jpg";
import S3 from "../../assets/img/brand/s3.jpg";
import S4 from "../../assets/img/brand/s4.jpg";
import '../ServicesDermatology/servicedermaatology.css'

export default function ServicesDermatology() {
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 class="section-title"> SERVICES </h1>
        <h1 class="section-dermatology mb-4"> DERMATOLOGY </h1>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={S1} 
            
            style={{ height: "200px" }}/>
            <Card.Body>
              <Card.Title className="d1">SKIN, HAIR, NAIL CARE
              <style type="text/css">
            {`
    .d1 {
      color:#9e289e;
    }
    `}
          </style>

              </Card.Title>
              <Card.Text>
                Dr. Dhanyata has vast experience of treating over 80000 various
                varieties of skin, hair and nail diseases patients since last 6
                years.
              </Card.Text>
              <Button className="card-button1" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={S2} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="d1">WART & MOLE REMOVAL</Card.Title>
              <Card.Text>
                Moles are small black coloured skin outgrowths (nevi) which are
                present since birth and are non-infectious. Cosmetic reason is
                the most common reason for
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={S3} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="d1">VITILIGO SURGERY</Card.Title>
              <Card.Text>
                Vitiligo is an autoimmune condition that presents as sharply
                demarcated white patches. Principles of Vitiligo Surgery,
                Covering the vitiligo
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={S4} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title className="d1">PAEDIATRIC & OLD AGE SKIN CARE</Card.Title>
              <Card.Text>
                Atopic dermatitis (dry skin disorders), bacterial infections,
                scabies, head lice, chicken pox and viral skin rashes are common
              </Card.Text>
              <Button className="card-button" variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
