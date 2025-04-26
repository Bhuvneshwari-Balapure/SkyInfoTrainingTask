import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import watch from "../assets/images/watch.jpg";
import "./specialProduct.css";

const productData = [
  {
    brand: "Havels",
    title: "Samsung Galaxy Note10+ Mobile Phone; Sim....",
    price: 100,
    oldPrice: 200,
    daysLeft: 5,
    productsLeft: 5,
    progress: 25,
    image: watch,
    rating: 3,
  },
  {
    brand: "Boat",
    title: "Boat Smartwatch Pro Edition with AMOLED Display",
    price: 80,
    oldPrice: 150,
    daysLeft: 3,
    productsLeft: 8,
    progress: 40,
    image: watch,
    rating: 4,
  },
  {
    brand: "Sony",
    title: "Sony Noise Cancelling Headphones WH-1000XM4",
    price: 120,
    oldPrice: 220,
    daysLeft: 2,
    productsLeft: 3,
    progress: 60,
    image: watch,
    rating: 5,
  },
];

function OurSpecialProducts() {
  return (
    <Container className="my-5">
      <h4 className="mb-4">Special Products</h4>
      <Row>
        {productData.map((product, idx) => (
          <Col key={idx} xs={12} md={6} lg={4} className="mb-4">
            <Card className="p-3 special-product-card h-100">
              <Row className="g-3">
                {/* Image */}
                <Col xs={5}>
                  <Card.Img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                  />
                </Col>

                {/* Product Info */}
                <Col xs={7}>
                  <div className="special-product-content">
                    <h5 className="brand mb-1">{product.brand}</h5>
                    <h6 className="title mb-2">{product.title}</h6>

                    {/* Star Rating */}
                    <div className="d-flex mb-2 text-warning">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {[...Array(5 - product.rating)].map((_, i) => (
                        <FaRegStar key={i} />
                      ))}
                    </div>

                    {/* Pricing */}
                    <p className="price mb-2">
                      <span className="red-p fw-bold">${product.price}</span>
                      &nbsp;
                      <strike className="text-muted">
                        ${product.oldPrice}
                      </strike>
                    </p>

                    {/* Discount and Countdown */}
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <p className="mb-0">
                        <b>{product.daysLeft} days</b>
                      </p>
                      <div className="d-flex gap-2 align-items-center">
                        <Badge className="rounded-circle bg-warning p-2">
                          1
                        </Badge>
                        :
                        <Badge className="rounded-circle bg-warning p-2">
                          1
                        </Badge>
                        :
                        <Badge className="rounded-circle bg-warning p-2">
                          1
                        </Badge>
                      </div>
                    </div>

                    {/* Progress */}
                    <div>
                      <p className="mb-1">Products: {product.productsLeft}</p>
                      <ProgressBar now={product.progress} />
                      <Button variant="dark" className="mt-3 w-100">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OurSpecialProducts;
