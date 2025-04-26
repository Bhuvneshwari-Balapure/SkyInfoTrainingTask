import { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaEye,
  FaTrash,
  FaExchangeAlt,
} from "react-icons/fa";
import acc from "../assets/images/acc.jpg";
import watch from "../assets/images/watch.jpg";
import headphon from "../assets/images/headphone.jpg";
import speaker from "../assets/images/speaker.jpg";
import "../productcard.css";

const products = [
  {
    brand: "Havells",
    name: "Kids Headphones Bulk 10 Pack Multi Colored For...",
    image: acc,
    price: "$100.00",
    rating: 4,
  },
  {
    brand: "Sony",
    name: "Olympus Pen E-PL9 Kit With 14–42, EZ Lens, Camera",
    image: watch,
    price: "$10.00",
    rating: 1,
  },
  {
    brand: "Havells",
    name: "Honor T1 7.0 1 GB RAM 8 GB ROM...",
    image: headphon,
    price: "$100.00",
    rating: 4,
  },
  {
    brand: "Bajaj",
    name: "Beoplay A1 Portable Bluetooth Speaker With...",
    image: speaker,
    price: "$500.00",
    originalPrice: "$750.00",
    discount: "-33%",
    rating: 3,
  },
  {
    brand: "Sony",
    name: "Milanese Loop Watch Band For 42mm/44mm Apple...",
    image: watch,
    price: "$10.00",
    rating: 5,
  },
  {
    brand: "Bajaj",
    name: "Sony EXTRA BASS Portable Splash-Proof Wireless...",
    image: speaker,
    price: "$10.00",
    rating: 0,
  },
];

const renderStars = (count) => {
  const fullStars = Math.floor(count);
  const halfStar = count % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars).fill(<FaStar className="text-warning me-1" />)}
      {halfStar && <FaStarHalfAlt className="text-warning me-1" />}
      {Array(emptyStars).fill(<FaRegStar className="text-warning me-1" />)}
    </>
  );
};

const FeaturedCollection = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (index) => {
    setWishlist((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Featured Collection</h4>
      <Row className="g-4">
        {products.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={2}>
            <Card className="product-card border-0 shadow-sm h-100 rounded-4 position-relative">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="product-img"
                />

                <div
                  className="wishlist-icon position-absolute top-0 end-0 m-2 fs-5"
                  onClick={() => toggleWishlist(idx)}
                >
                  {wishlist.includes(idx) ? (
                    <FaHeart className="text-danger" />
                  ) : (
                    <FaRegHeart className="text-muted" />
                  )}
                </div>

                {item.discount && (
                  <Badge
                    bg="warning"
                    className="position-absolute top-0 start-0 m-2"
                  >
                    {item.discount}
                  </Badge>
                )}

                <div className="hover-icons position-absolute top-50 end-0 translate-middle-y">
                  <FaEye className="icon" />
                  <FaTrash className="icon" />
                  <FaExchangeAlt className="icon" />
                </div>
              </div>
              <Card.Body>
                <small className="text-muted d-block">{item.brand}</small>
                <Card.Title className="fs-6 text-truncate">
                  {item.name}
                </Card.Title>
                <div className="rating mb-1">{renderStars(item.rating)}</div>
                <div>
                  <strong className="text-danger">{item.price}</strong>{" "}
                  {item.originalPrice && (
                    <del className="text-muted small ms-2">
                      {item.originalPrice}
                    </del>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedCollection;
