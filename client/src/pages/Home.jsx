import { Container, Row, Col, Button } from "react-bootstrap";
import "../Home.css";
import mainBanner from "../assets/images/main-banner.jpg";
import catBanner1 from "../assets/images/catbanner-01.jpg";
import catbanner2 from "../assets/images/catbanner-02.jpg";
import catbanner3 from "../assets/images/catbanner-03.jpg";
import catbanner4 from "../assets/images/catbanner-04.jpg";
const Home = () => {
  return (
    <section className="home-wrapper-1 py-5">
      <Container>
        <Row>
          {/* Left Main Banner */}
          <Col md={6} className="position-relative">
            <div
              className="p-3 rounded-3 bg-light d-flex align-items-center position-relative"
              style={{ backgroundColor: "#e8d6cf" }}
            >
              <img
                src={mainBanner}
                alt="Main Banner"
                className="img-fluid w-100 rounded-3"
              />
              <div
                className="position-absolute text-dark p-4"
                style={{ top: "10%", left: "10%" }}
              >
                <h6 className="text-uppercase" style={{ color: "#e65d1b" }}>
                  Supercharged for Pros.
                </h6>
                <h2 className="fw-bold">iPad S13+ Pro.</h2>
                <p>From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
                <Button variant="dark">Buy Now</Button>
              </div>
            </div>
          </Col>

          {/* Right Side Grid */}
          <Col md={6}>
            <Row>
              {/* Top Row */}
              <Col md={6} className="mb-3">
                <div
                  className="p-3 rounded-3 h-100 text-dark"
                  style={{ backgroundColor: "#c9e9f6" }}
                >
                  <small className="text-uppercase text-danger">
                    Best Sale
                  </small>
                  <h5 className="fw-semibold">Laptops Max</h5>
                  <p>From $1699.00 or $64.62/mo.</p>
                  <img
                    src={catBanner1}
                    alt="Laptop"
                    className="img-fluid small-img"
                  />
                </div>
              </Col>

              <Col md={6} className="mb-3">
                <div
                  className="p-3 rounded-3 h-100 text-dark"
                  style={{ backgroundColor: "#f8dcc6" }}
                >
                  <small className="text-uppercase text-warning">
                    New Arrival
                  </small>
                  <h5 className="fw-semibold">Buy iPad Air</h5>
                  <p>From $599 or $49.91/mo. for 12 mo.*</p>
                  <img
                    src={catbanner2}
                    alt="iPad Air"
                    className="img-fluid small-img"
                  />
                </div>
              </Col>

              {/* Bottom Row */}
              <Col md={6}>
                <div
                  className="p-3 rounded-3 h-100 text-dark"
                  style={{ backgroundColor: "#d6f4f0" }}
                >
                  <small className="text-uppercase text-danger">15% Off</small>
                  <h5 className="fw-semibold">Smartwatch 7</h5>
                  <p>Shop the latest band styles and colors.</p>
                  <img
                    src={catbanner3}
                    alt="Smartwatch"
                    className="img-fluid small-img"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div
                  className="p-3 rounded-3 h-100 text-dark"
                  style={{ backgroundColor: "#ecd6cf" }}
                >
                  <small className="text-uppercase text-danger">
                    Free Engraving
                  </small>
                  <h5 className="fw-semibold">AirPods Max</h5>
                  <p>High-fidelity playback & ultra-low distortion</p>
                  <img
                    src={catbanner4}
                    alt="AirPods Max"
                    className="img-fluid small-img"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
