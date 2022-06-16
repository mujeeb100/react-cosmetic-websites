import React from "react";
import P3 from "../../assets/img/brand/p3.jpg";
import Button from "react-bootstrap/Button";

export default function SectionThree() {
  return (
    <div className="container mt-5  mb-5">
      <div className="row ">
        <h1 class="section-title">
          {" "}
          Dr. Dhanyata Ghubade-Phadte – Dermatologist in Thane
        </h1>
        <b></b>
        <div className="col-md-6 mt-5">
          <img src={P3} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-md-6 mt-5 mb-3">
          <p class="text-section lh-sm text-start">
            Dr. Dhanyata Ghubade-Phadte – MBBS, DVD is a well renowned
            Specialist doctor with 6 years of clinical experience in field of
            Dermatology and Cosmetology. She is a Board Certified Life Member of
            IADVL, ISPD and CDSI. She has completed ‘CERTIFIED COURSES’ like
            Intermediate program in Cosmetic procedure under SLDA Mumbai &
            Instructional course in PRP, micro needling, chemical peels,
            non-laser techniques in acne management, scalp micro pigmentation at
            ASCICON.
          </p>
          <p class="text-section lh-sm text-start">
            She is an expert in treating DERMATOLOGICAL diseases like Tinea
            (Ringworm), Acne, Psoriasis, Herpes, Leprosy, STD’s, warts etc. as
            well as COSMETIC procedures like Botox, Fillers, Microdermabrasion,
            Hydrafacial, Dermarollers, PRP, Chemical Peel, LASERS etc.
          </p>
          <style type="text/css">
            {`
    .btn-flat {
      background-color: #08838b;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .sectionthree{
      float:left;
    }
    `}
          </style>

          <Button className="sectiontwo mt-3" variant="flat" size="xl">
            Click Know more
          </Button>
        </div>
      </div>
    </div>
  );
}
