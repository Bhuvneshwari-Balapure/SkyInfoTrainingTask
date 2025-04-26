import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import Watch from "../assets/images/watch.jpg";
import "../productcard.css";
// import ReactImageZoom from "react-image-zoom";

function SingleProduct() {
  return (
    <>
      <Meta title={"Product Details"} />
      <BreadCrumb title={"Product Details"} />

      <section className="product-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Card className="p-3 shadow-sm rounded-4">
                <div className="image-zoom-container">
                  <img
                    src={Watch}
                    alt="Product Image"
                    className="img-fluid zoom-image"
                  />
                </div>
                <div className="other-product-image ">
                  <div>
                    <img src={Watch} alt="other-image" className="img-fluid" />
                  </div>
                  <div>
                    <img src={Watch} alt="other-image" className="img-fluid" />
                  </div>
                  <div>
                    <img src={Watch} alt="other-image" className="img-fluid" />
                  </div>
                  <div>
                    <img src={Watch} alt="other-image" className="img-fluid" />
                  </div>
                </div>
              </Card>
            </Col>

            <Col md={6}>
              <div className="product-details p-3">
                <h3 className="mb-3">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
                <h4 className="mb-3">$100.00</h4>

                <div className="mb-3 d-flex flex-column">
                  <div className="d-flex align-items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <span className="ms-2">(2 reviews)</span>
                  </div>
                  <a href="#review" className="text-decoration-underline mt-2">
                    Write a review
                  </a>
                </div>

                <div className="product-info mb-3">
                  <p>
                    <strong>Type:</strong> Headsets
                  </p>
                  <p>
                    <strong>Brand:</strong> Havells
                  </p>
                  <p>
                    <strong>Categories:</strong> airpods, cameras, Computers &
                    Laptop, headphones, mini speaker, Smart Television,
                    Smartwatches
                  </p>
                  <p>
                    <strong>Tags:</strong> headphones, laptop, mobile, oppo,
                    speaker
                  </p>
                  <p>
                    <strong>SKU:</strong> SKU027
                  </p>
                  <p>
                    <strong>Availability:</strong> 541 In Stock
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <Form.Group controlId="formSize">
                    <Form.Label>
                      <strong>Size</strong>
                    </Form.Label>
                    <div>
                      <Button variant="outline-dark" size="sm" className="me-2">
                        S
                      </Button>
                      <Button variant="outline-dark" size="sm">
                        L
                      </Button>
                    </div>
                  </Form.Group>
                </div>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <Form.Group controlId="formColor">
                    <Form.Label>
                      <strong>Color</strong>
                    </Form.Label>
                    <div className="d-flex gap-2">
                      <Button
                        variant="danger"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></Button>
                      <Button
                        variant="secondary"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></Button>
                    </div>
                  </Form.Group>
                </div>

                {/* Quantity and Add to Cart Section */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Form.Group
                    controlId="formQuantity"
                    className="d-flex align-items-center"
                  >
                    <Form.Label className="me-2">
                      <strong>Quantity</strong>
                    </Form.Label>
                    <div className="d-flex align-items-center">
                      <Button variant="light" className="border">
                        -
                      </Button>
                      <Form.Control
                        type="text"
                        value="1"
                        style={{ width: "50px", textAlign: "center" }}
                        readOnly
                      />
                      <Button variant="light" className="border">
                        +
                      </Button>
                    </div>
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="dark" size="md">
                      ADD TO CART
                    </Button>
                    <Button variant="warning" size="md">
                      Buy It Now
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Description Section */}
          <Row className="mt-5">
            <Col>
              <h4>Description</h4>
              <Card className="p-3 shadow-sm rounded-4">
                <Card.Text>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident...
                </Card.Text>
              </Card>
            </Col>
          </Row>

          {/* Reviews Section */}
          <Row className="mt-5" id="review">
            <Col>
              <h4>Reviews</h4>
              <Card className="p-3 shadow-sm rounded-4">
                <h5>Customer Reviews</h5>
                <p>
                  <FaStar />
                  <FaStar />
                  <FaStar /> Based on 2 reviews
                </p>

                <h5 className="mt-4">Write A Review</h5>
                <Form>
                  <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Write your comments</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button variant="dark" type="submit">
                    Submit Review
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SingleProduct;
