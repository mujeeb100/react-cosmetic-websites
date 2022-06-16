import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "../Navbar/navbar.css";
// import Prestine from "../../assets/img/brand/prestine1.png";

export default function NavbarComponent() {
  return (
    <div>
      <header className="nav-header">
        <div className="container">
          <div className="row d-flex justify-content-between ms-auto ">
            <div className="col-md-6 ">
              <p class="text-left">WELCOME TO PRISTINE CENTRE</p>
            </div>
            <div className="col-md-6 ">
              <p class="tex-right">
                {" "}
                <i class="bi bi-telephone m-2"></i> +91 9773158115
                <i class="bi bi-facebook m-2"></i>
                <i class="bi bi-instagram m-2"></i>
                <i class="bi bi-twitter m-2"></i>
              </p>
            </div>
          </div>
        </div>
      </header>

      <Navbar bg="light" expand="lg">
        <Container>
          <img
            width="300px"
            height="83"
            src="https://www.pristinecosmesis.com/wp-content/uploads/2021/04/PRISTINE-FINAL-LOGO-11.png"
            class="header_logo header-logo"
            alt="Pristine Centre"
          />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-end ">
              <style type="text/css">
                {`
            .nav-contents{
              font-weight: bold;
              font-size:16px;
            }
           
    }
    `}
              </style>

              <Nav.Link href="#home" className="nav-contents">
                HOME
              </Nav.Link>
              <NavDropdown
                title="ABOUT"
                className="nav-contents"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Service #1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Service #2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Service #3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown
                title="TREATMENTS"
                className="nav-contents"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Service #1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Service #2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Service #3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown
                title="GALLERY"
                className="nav-contents"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Service #1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Service #2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Service #3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#link" className="nav-contents">
                BLOG
              </Nav.Link>
              <Nav.Link href="#link" className="nav-contents">
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#link" className="h5 book-appointment mr-4">
                BOOK APPOINTMENTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
