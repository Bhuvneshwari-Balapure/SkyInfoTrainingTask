import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper text-light pt-5"
      style={{ backgroundColor: "#203442", color: "white" }}
    >
      <Container>
        {/* Newsletter Signup */}
        <Row className="mb-4">
          <Col md={6}>
            <h5>
              <i className="bi bi-send"></i> Sign Up For Newsletter
            </h5>
          </Col>
          <Col md={6}>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="me-2"
              />
              <Button variant="outline-light">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Footer Info Sections */}
        <Row className="text-start">
          <Col md={3}>
            <h6>Contact Us</h6>
            <p>
              Demo Store
              <br />
              No. 1259 Freedom, New York, 1111
              <br />
              United States
              <br />
              +91-987654321
              <br />
              Demo@Exampledemo.Com
            </p>
            <div className="d-flex gap-2">
              <FaTwitter
                className="social-icon text-white"
                style={{ cursor: "pointer" }}
              />
              <FaFacebookF
                className="social-icon text-white"
                style={{ cursor: "pointer" }}
              />
              <FaPinterestP
                className="social-icon text-white"
                style={{ cursor: "pointer" }}
              />
              <FaInstagram
                className="social-icon text-white"
                style={{ cursor: "pointer" }}
              />
              <FaYoutube
                className="social-icon text-white"
                style={{ cursor: "pointer" }}
              />
            </div>
          </Col>

          <Col md={2}>
            <h6>Information</h6>
            <ul className="list-unstyled ">
              <Link as={Link} to="/privacy-policy" style={{ color: "white" }}>
                <li>Privacy Policy</li>
              </Link>
              <br />

              <Link as={Link} to="/refund-policy" style={{ color: "white" }}>
                <li>Refund Policy</li>
              </Link>

              <Link as={Link} to="/Shipping-policy" style={{ color: "white" }}>
                <li>Shipping Policy</li>{" "}
              </Link>

              <Link as={Link} to="/terms-condition" style={{ color: "white" }}>
                <li>Terms Of Service</li>
              </Link>

              <li>Blogs</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li>Search</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Size Chart</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Accessories</li>
              <li>Laptops</li>
              <li>Headphones</li>
              <li>Smart Watches</li>
              <li>Tablets</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6>Our App</h6>
            <p>
              Download our App and get extra 15% Discount on your first Order..!
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              width="120"
              className="me-2"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              width="120"
            />
          </Col>
        </Row>

        <hr className="border-light" />
        <div className="text-center pb-3">
          <p className="mb-0">{"\u00A9"} 2022, DigitiC Powered by Shopify</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
