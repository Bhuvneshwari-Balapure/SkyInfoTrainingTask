import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const MiddleHeader = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "#0e1d2c" }}>
      <Container>
        <Row className="align-items-center gy-3">
          <Col xs={12} md={3} className="text-center text-md-start">
            <h3 className="text-light m-0">Digitic.</h3>
          </Col>

          {/* search */}
          <Col xs={12} md={6}>
            <InputGroup>
              <Form.Control placeholder="Search Product Here..." />
              <Button variant="warning">
                <FaSearch />
              </Button>
            </InputGroup>
          </Col>

          {/* icons */}

          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center justify-content-md-end flex-wrap gap-3 text-light"
          >
            <div className="text-center" style={{ cursor: "pointer" }}>
              <Link as={Link} to="/wishlist" style={{ color: "white" }}>
                <FaHeart />
                <div style={{ fontSize: "12px" }}>
                  Favourite <br /> Wishlist
                </div>
              </Link>
            </div>
            <div className="text-center" style={{ cursor: "pointer" }}>
              <Link as={Link} to="/login" style={{ color: "white" }}>
                <FaUser />
                <div style={{ fontSize: "12px" }}>
                  Log In <br /> My Account
                </div>
              </Link>
            </div>
            <div className="text-center" style={{ cursor: "pointer" }}>
              <Link as={Link} to="/cart" style={{ color: "white" }}>
                <FaShoppingCart />
                <div style={{ fontSize: "12px" }}>
                  0 <br /> $0.00
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleHeader;
