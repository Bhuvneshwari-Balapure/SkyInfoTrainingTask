import { Container, Row, Col, Card, ListGroup, Form } from "react-bootstrap";
import BreadCrumb from "../../components/BreadCrumb";
// import headphon from "../../assets/images/headphone.jpg";
// import acc from "../../assets/images/acc.jpg";
import watch from "../../assets/images/watch.jpg";
import ProductCard from "../../components/ProductCard";

const colors = ["red", "green", "blue", "black", "orange"];
const tags = ["Headphone", "Smartwatch", "Tablet", "Camera"];
const randomProducts = [
  {
    title: "Samsung Galaxy Tab A",
    img: watch,
    rating: "★★★★☆",
    price: "$250",
  },
  {
    title: "Canon EOS M50",
    img: watch,
    rating: "★★★☆☆",
    price: "$500",
  },
];

const productList = [
  {
    brand: "Sony",
    title: "Sony Wireless Headphones",
    price: 99,
    rating: 4,
    image: watch,
  },
  {
    brand: "Apple",
    title: "Apple Watch Series 6",
    price: 399,
    rating: 5,
    image: watch,
  },
  {
    brand: "Havells",
    title: "Smart Watch Fitness Tracker",
    price: 149,
    rating: 3,
    image: watch,
  },
  {
    brand: "Sony",
    title: "Sony Mirrorless Camera",
    price: 699,
    rating: 4,
    image: watch,
  },
];

const OurStore = () => {
  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5">
        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col md={3}>
              {/* Shop By Categories */}
              <Card className="filter-card mb-3">
                <Card.Body>
                  <Card.Title className="filter-title">
                    Shop By Categories
                  </Card.Title>
                  <ListGroup variant="flush">
                    {["Watch", "TV", "Camera", "Laptop"].map((item) => (
                      <ListGroup.Item action key={item}>
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              {/* Filter By */}
              <Card className="filter-card mb-3">
                <Card.Body>
                  <Card.Title className="filter-title">Filter By</Card.Title>
                  <Card.Subtitle className="mb-2 sub-title">
                    Availability
                  </Card.Subtitle>
                  <Form className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="In Stock (10)"
                      id="in-stock"
                      className="mb-2"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Out of Stock (2)"
                      id="out-of-stock"
                    />
                  </Form>
                  <Card.Subtitle className="mb-2 sub-title">
                    Price
                  </Card.Subtitle>
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Label>From:</Form.Label>
                      <Form.Control type="number" placeholder="Min Price" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>To:</Form.Label>
                      <Form.Control type="number" placeholder="Max Price" />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>

              {/* Color Filter */}
              <Card className="filter-card mb-3">
                <Card.Body>
                  <Card.Subtitle className="mb-2 sub-title">
                    Color
                  </Card.Subtitle>
                  <div className="d-flex flex-wrap gap-2">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        className="color-swatch"
                        style={{
                          backgroundColor: color,
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          border: "1px solid #ccc",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                        title={color}
                      ></span>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              {/* Product Tags */}
              <Card className="filter-card mb-3">
                <Card.Body>
                  <Card.Title className="filter-title">Product Tag</Card.Title>
                  <div className="d-flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="product-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              {/* Random Products */}
              <Card className="filter-card mb-3">
                <Card.Body>
                  <Card.Title className="filter-title">
                    Random Products
                  </Card.Title>
                  {randomProducts.map((product, index) => (
                    <div key={index} className="d-flex align-items-start mb-3">
                      <img
                        src={product.img}
                        alt="product"
                        className="me-3"
                        style={{
                          borderRadius: "6px",
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6
                          className="mb-1"
                          style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          {product.title}
                        </h6>
                        <div
                          className="text-warning mb-1"
                          style={{ fontSize: "12px" }}
                        >
                          {product.rating}
                        </div>
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Product Grid */}
            <Col md={9}>
              <Row className="">
                {productList.map((product, idx) => (
                  <Col key={idx} md={4}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurStore;
