import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../assets/images/watch.jpg";
function Checkout() {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title={"Checkout"} />

      <Container className="py-4">
        <Row>
          <Col md={7}>
            <h4>Contact information</h4>
            <p>Navdeep Dahiya (monud0232@gmail.com)</p>
            <a href="#">Log out</a>

            <Form.Group controlId="emailOffers" className="my-3">
              <Form.Check
                type="checkbox"
                label="Email me with news and offers"
              />
            </Form.Group>

            <h4>Shipping address</h4>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Saved addresses</Form.Label>
                <Form.Select>
                  <option>United States (Navdeep Dahiya)</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country/Region</Form.Label>
                <Form.Select>
                  <option>United States</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First name (optional)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Navdeep"
                      name="firstname"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Dahiya"
                      name="lastname"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter an address"
                  name="address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Apartment, suite, etc. (optional)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter a city" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Select>
                      <option>Select a state / province</option>
                    </Form.Select>
                    <Form.Control.Feedback>
                      Select a state / province
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a ZIP / postal code"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter a ZIP / postal code
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <a href="#" className="text-decoration-none">
                  &larr; Return to cart
                </a>
                <Button variant="danger">Continue to shipping</Button>
              </div>
            </Form>
          </Col>

          <Col md={5}>
            <div className="border p-3 rounded bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img src={watch} alt="Product" className="me-3" />
                  <div>
                    <p className="mb-0">
                      Kids headphones bulk 10 pack multi colored for students
                    </p>
                    <small>S / #A85A5A</small>
                  </div>
                </div>
                <span>$100.00</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>$100.00</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>
                  Estimated taxes <i className="bi bi-question-circle"></i>
                </span>
                <span>$18.00</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>USD $118.00</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
