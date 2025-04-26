import { Container, Row, Col } from "react-bootstrap";

const TopHeader = () => {
  return (
    <div className="bg-dark text-light py-1 TopHeader">
      <Container>
        <Row className="align-items-center gy-2">
          <Col xs={12} md={6} className="text-center text-md-start">
            <small>Free Shipping Over $100 & Free Returns</small>
          </Col>

          <Col xs={12} md={6} className="text-center text-md-end ">
            <small>
              Hotline:{" "}
              <a className="text-white mx-4" href="tel:+91 7857365527">
                +91 7857365527
              </a>
              {/* | English ▼ | USD $ ▼ */}
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
