import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./MyNavbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeComp from "./HomeComp";
import ContactComp from "./ContactComp";

function MyNavbar() {
  return (
    <BrowserRouter>
      <div>
        <Navbar expand="lg" className="navbarstyle">
          <Container>
            <Navbar.Brand id="navtextstyleheader">
              Peter's Portfolio
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-dark"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" id="navtextstyle" className="px-2">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  id="navtextstyle"
                  className="px-2"
                >
                  Contact
                </Nav.Link>
                <NavDropdown
                  title="Explore"
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Experiment 1
                  </NavDropdown.Item>

                  <NavDropdown.Divider className="dropdowndividerstyle" />
                  <NavDropdown.Item href="#action/3.2">
                    Experiment 2
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div></div>
      </div>
      <Routes>
        <Route path="/contact" element={<ContactComp />} />
        <Route path="/" element={<HomeComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyNavbar;
