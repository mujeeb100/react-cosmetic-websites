import React from "react";
import P1 from "../../assets/img/brand/p1.jpg";
import Button from "react-bootstrap/Button";
import "../SectionOne/sectionone.css";

export default function SectionOne() {
  return (
    <div className="container mt-5  mb-5">
      <div className="row ">
        <h1 class="section-title">
          <b></b> WELCOME TO PRISTINE CENTRE
        </h1>
        <b></b>
        <div className="col-md-6 mt-5">
          <img src={P1} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-md-6 mt-5 mb-3">
          <p class="lh-sm text-start text-section">
            A Centre par excellence for management of all kind of Skin, Hair,
            Nail Diseases, all types of Wounds, Cosmetic treatment, Body
            Reshaping, Hair Restoration and much more. We ensure a ‘COVID SAFE’
            environment with regular sanitization protocols and all necessary
            precautions to ensure safe consultation and treatment of all our
            patients.
          </p>
          <p class="h4 text-primary mt-5 passion-text">
            Our Passion - “IMPROVING LOOKS, CHANGING LIVES”{" "}
          </p>
          <div className="float-left-button mt-3">
          <Button  variant="danger">
            View More
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
