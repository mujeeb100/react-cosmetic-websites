import React from "react";
import P2 from "../../assets/img/brand/p2.jpg";
import Button from "react-bootstrap/Button";

export default function SectionTwo() {
  return (
    <div class="container-fluid w-auto p-3 sectionone-background">
    <div className="container mt-5  mb-5">
      <div className="row ">
        <h1 class="section-title">
          Dr. Nikhil Ghubade – Plastic Surgeon in Thane
        </h1>
        <div className="col-md-6 mt-5">
          <p class="text-section lh-sm text-start">
            Dr. NIKHIL GHUBADE – M.B.B.S., DNB (General Surgery), MCh (Plastic
            Surgery) is a board certified Plastic Surgeon with 5 years of
            clinical experience in Reconstructive & Cosmetic Surgery as well as
            International experience with Observership at Englewood Hospital,
            New York, USA and Fellowship in Plastic, Reconstructive and Burns
            Surgery from TSGH Hospital, Taiwan. He is Co-Author for chapter of
            “ACUTE BURN MANAGEMENT AND BURN WOUND EVALUATION” in the‘Text book
            of Plastic, Reconstructive and Aesthetic Surgery: Burns, Volume V’.
            He is an expert in AESTHETIC Surgeries like Hair Transplant, Body
            Reshaping, Liposuction, Breast reconstruction, Facial Cosmetic
            Surgery etc. as well as RECONSTRUCTIVE procedures like management of
            scars, non-healing wounds, diabetic foot, post burns scar,
            contractures etc.
          </p>

          <style type="text/css">
            {`
            
    .btn-flat {
      background-color: #eeeaea;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      
    }
    .sectionone-background{
      background-color: rgba(231, 227, 227, 0.85);
    }    
    .sectiontwo{
      float:left;
    }
    }
    `}
          </style>

          <Button className="sectiontwo mt-3" variant="flat" size="xl">
            Click Know more
          </Button>
        </div>
        <div className="col-md-6 mt-5 mb-3">
          <img src={P2} class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </div>
    </div>
  );
}
