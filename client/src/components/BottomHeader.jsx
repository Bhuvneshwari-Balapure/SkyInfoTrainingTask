import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
const BottomHeader = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#203442", color: "white" }}
      variant="dark"
      expand="lg"
    >
      <Container>
        <NavDropdown
          id="shop-categories"
          className="shop-categories-dropdown"
          title={
            <span className="d-flex align-items-center gap-2 text-white">
              <FaThLarge className="icon" />
              <span className="text">SHOP CATEGORIES</span>
              <BsChevronDown className="chevron" />
            </span>
          }
          menuVariant="dark"
        >
          <NavDropdown.Item as={Link} to="/cat1">
            Category 1
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cat2">
            Category 2
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cat3">
            Category 3
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Our Store
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BottomHeader;
