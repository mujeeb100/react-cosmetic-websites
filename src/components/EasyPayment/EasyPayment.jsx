import React from "react";
import Button from 'react-bootstrap/Button'
import E1 from "../../assets/img/brand/e1.jpg";
import E2 from "../../assets/img/brand/e2.jpg";
import E3 from "../../assets/img/brand/e3.jpg";
import E4 from "../../assets/img/brand/e4.jpg";
import '../EasyPayment/easypayment.css'



export default function EasyPayment() {
  return (
    <div class="container-fluid w-auto p-3 easy-background">
    <div className="container  easypayment mt-2 header-easypayment">
      
      <div className="row ">
      
        
        <div className="col-md-12">
          <h1>EASY PAYMENT</h1>
          <p class="h6 mt-5">
            Don’t worry about the cost of treatment any more. We offer easy
            financing options through our partners for elective medical
            treatments.
          </p>
          <p class=" h4 mt-4">
          EMI FACILITY AVAILABLE
          </p>
          <b class="emifacility"></b>
          <p class="h1 mt-5 m-2">
          919773158115
          </p>
          <Button  class="btn btn-outline-primary m-4 mt-3 mb-3" variant="primary" size="lg">
      ENQUIRY
    </Button>{' '}     </div>
      </div>
      <div className=" row  mt-3 mb-2 p-2">
          <div className="easypaymentmode col-md-12  ">
          <img src={E1} class="img-fluid" alt="Responsive image" />
          <img src={E2} class="img-fluid" alt="Responsive image" />
          <img src={E3} class="img-fluid" alt="Responsive image" />
          <img src={E4} class="img-fluid" alt="Responsive image" />
          </div>
          </div>
      </div>
    </div>
  );
}
