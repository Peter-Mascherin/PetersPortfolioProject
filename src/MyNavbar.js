import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbarstyle">
      <Container>
        <Navbar.Brand id="navtextstyleheader">Peter's Portfolio</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-dark"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" id="navtextstyle" className="px-2">
              Home
            </Nav.Link>
            <Nav.Link href="#home" id="navtextstyle" className="px-2">
              About
            </Nav.Link>
            <Nav.Link href="#link" id="navtextstyle" className="px-2">
              Contact
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
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
  );
}

export default MyNavbar;
