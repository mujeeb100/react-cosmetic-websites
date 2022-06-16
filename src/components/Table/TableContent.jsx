import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Form from 'react-bootstrap/Form'
import { Col, Row, Form } from "react-bootstrap";
import "../Table/tablecontent.css";

export default function TableContent() {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div class="d-flex justify-content-between m-3">
        <Button variant="primary" onClick={() => setShow(true)}>
          {" "}
          Add
        </Button>
        <h1>Patients Management System</h1>

        {/* modal part in in this pages start */}

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Add New Patient
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="Last Name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="Last Name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Last Visit</Form.Label>
                  <Form.Control
                    type="First Name"
                    placeholder="Eg. 25-Feb-2021"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Next Visit</Form.Label>
                  <Form.Control
                    type="Last Name"
                    placeholder="Eg. 12-Mar-2021"
                  />
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary  " onClick={() => setShow(true)}>
              Add
            </Button>
            <Button variant="secondary" onClick={() => setShow(true)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* modal part in in this pages end */}

      {/* table part in the react-bootstrap */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Last Visit</th>
            <th>Next Visit</th>
            <th>Actioin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
            <i class="bi bi-info-circle"></i>
            <i class="bi bi-pen"></i>
            <i class="bi bi-trash"></i>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
            <i class="bi bi-info-circle"></i>
            <i class="bi bi-pen"></i>
            <i class="bi bi-trash"></i>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>{" "}
          <tr>
            <td>4</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>8888888888</td>
            <td>London</td>
            <td>Tuesday</td>
            <td>Thursday</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
