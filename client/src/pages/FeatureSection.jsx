import { Container, Row, Col } from "react-bootstrap";
import {
  FaShippingFast,
  FaGift,
  FaHeadphonesAlt,
  FaTags,
  FaCreditCard,
} from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="py-4 bg-light">
      <Container>
        <Row className="text-center g-4">
          <Col xs={6} md={2}>
            <FaShippingFast size={28} />
            <h6 className="mt-2 fw-bold">Free Shipping</h6>
            <p className="small text-muted">From all orders over $5</p>
          </Col>
          <Col xs={6} md={2}>
            <FaGift size={28} />
            <h6 className="mt-2 fw-bold">Daily Surprise Offers</h6>
            <p className="small text-muted">Save up to 25% off</p>
          </Col>
          <Col xs={6} md={2}>
            <FaHeadphonesAlt size={28} />
            <h6 className="mt-2 fw-bold">Support 24/7</h6>
            <p className="small text-muted">Shop with an expert</p>
          </Col>
          <Col xs={6} md={2}>
            <FaTags size={28} />
            <h6 className="mt-2 fw-bold">Affordable Prices</h6>
            <p className="small text-muted">Get factory default price</p>
          </Col>
          <Col xs={6} md={2}>
            <FaCreditCard size={28} />
            <h6 className="mt-2 fw-bold">Secure Payments</h6>
            <p className="small text-muted">100% protected payment</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
