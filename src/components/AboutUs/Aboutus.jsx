import React from "react";
import Badge from "react-bootstrap/Badge";
import Accordion from 'react-bootstrap/Accordion'

export default function Aboutus() {
  return (
    <div class="container-fluid w-auto p-3 easy-background">
    <div className="container">
      <div className="row">
        <div className="col-md-3 aboutus-page">
          <h5 className="text-start">
            About Us <Badge bg="secondary"></Badge>
          </h5>
          <p class="text-start">
            A Centre par excellence for<br></br> management of all kind of Skin,<br></br> Hair,
            Nail Diseases, all types of<br></br> Wounds, Cosmetic treatment,<br></br> Body
            Reshaping, Hair Restoration<br></br> and much more.
            
          </p>
          <div className="text-start">
          <i class="bi bi-facebook m-2 icon-color-facebook"></i>
                <i class="bi bi-instagram m-2 icon-color-instagram"></i>
                <i class="bi bi-twitter m-2 icon-color-twitter"></i>
          </div>
          
        </div>
        <div className="col-md-3">
        <h5 class="text-start">
        MAIN MENU<Badge bg="secondary"></Badge>
          </h5>
          <div className="Accordion">
          <Accordion className="easy-background">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About</Accordion.Header>
    <Accordion.Body>
    Dr. Nikhil Ghubade<br></br>
Dr. Dhanyata Ghubade-Phadte
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Services</Accordion.Header>
    <Accordion.Body>
    Dermatology<br></br>
Plastic Surgery<br></br>
Aesthetics
    </Accordion.Body>
    <Accordion.Header>Treatments</Accordion.Header>
    <Accordion.Body>
    Acne<br></br>
Skin Care Treatment<br></br>
Skin Grafting<br></br>
CYST Treatment<br></br>
Tattoo Removal<br></br>
Laser<br></br>
Hair Transplant<br></br>
Breast Reduction<br></br>
Body Reshaping
    </Accordion.Body>
    <Accordion.Header>Gallery</Accordion.Header>
    <Accordion.Body>
    Photos<br></br>
Videos<br></br>
Testimonials
    </Accordion.Body>
    <p class="H2 text-start ">BLOG</p>
    <Accordion.Header>Contact Us</Accordion.Header>
  </Accordion.Item>
</Accordion>
</div>
  
        </div>
        <div className="col-md-3">
        <h5 className="text-start">
        GET IN TOUCH WITH US <Badge bg="secondary"></Badge>
          </h5>
          <p className="text-start">Pristine Plastic Surgery,<br></br> Dermatology & Cosmetology <br></br>Centre<br></br>
Office No. 104, A1 Wing, Nagesh<br></br> Tower, Near Teen Petrol Pump,<br></br> LBS Marg, Thane (W) – 400 602<br></br>
Emergency : +91 9970 154 664<br></br>
Appointment : +91 9137 792 915<br></br>
Email :<br></br> pristinecosmesis@gmail.com</p>

        </div>
        <div className="col-md-3">
        <h5 class="text-start">
        Location <Badge bg="secondary"></Badge>
          </h5>
          <iframe src="https://https://www.google.com/maps/place/DK+RESIDENCY/@18.9730051,72.8279403,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7ce42462a875b:0xbbb310bbca8295fb!8m2!3d18.973!4d72.830129" width="300px" height="300px"></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}
