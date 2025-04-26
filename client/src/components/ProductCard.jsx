// import { useState } from "react";
// import PropTypes from "prop-types"; // ✅ Import PropTypes
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { Heart, Eye, Lock } from "react-bootstrap-icons";
// import watch from "../assets/images/watch.jpg"; // Adjust path if needed
// import "../productcard.css";

// const singleProduct = {
//   brand: "Havels",
//   title: "Samsung Galaxy Note10+ Mobile Phone; Sim....",
//   price: 100,
//   rating: 3,
//   image: watch,
// };

// const ProductCard = () => {
//   return (
//     <Container className="py-4">
//       <Row className="justify-content-center">
//         <Col xs={12} sm={8} md={6} lg={4}>
//           <CardWithHover product={singleProduct} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const CardWithHover = ({ product }) => {
//   const [liked, setLiked] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   const renderStars = (rating) => {
//     return (
//       <>
//         {[...Array(5)].map((_, i) =>
//           i < rating ? <FaStar key={i} color="orange" /> : <FaRegStar key={i} />
//         )}
//       </>
//     );
//   };

//   return (
//     <Card
//       className="product-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="like-icon" onClick={() => setLiked(!liked)}>
//         <Heart color={liked ? "red" : "gray"} size={20} />
//       </div>

//       <Card.Img variant="top" src={product.image} className="product-img" />

//       <div className={`hover-icons ${hovered ? "show" : ""}`}>
//         <Eye size={18} />
//         <Lock size={18} />
//       </div>

//       <Card.Body>
//         <Card.Subtitle className="mb-1 text-muted">
//           {product.brand}
//         </Card.Subtitle>
//         <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
//         <div className="rating">{renderStars(product.rating)}</div>
//         <div className="price">
//           <span style={{ fontWeight: "bold" }}>${product.price}</span>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// CardWithHover.propTypes = {
//   product: PropTypes.shape({
//     brand: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ProductCard;

// ProductCard.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Heart, Eye, Lock } from "react-bootstrap-icons";
import "../productcard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col>
          <CardWithHover product={product} />
        </Col>
      </Row>
    </Container>
  );
};

const CardWithHover = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const renderStars = (rating) => {
    return (
      <>
        {[...Array(5)].map((_, i) =>
          i < rating ? <FaStar key={i} color="orange" /> : <FaRegStar key={i} />
        )}
      </>
    );
  };

  return (
    <Card
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link as={Link} to="/singleProduct/:id">
        <div className="like-icon" onClick={() => setLiked(!liked)}>
          <Heart color={liked ? "red" : "gray"} size={20} />
        </div>

        <Card.Img variant="top" src={product.image} className="product-img" />

        <div className={`hover-icons ${hovered ? "show" : ""}`}>
          <Eye size={18} />
          <Lock size={18} />
        </div>

        <Card.Body>
          <Card.Subtitle className="mb-1 text-muted">
            {product.brand}
          </Card.Subtitle>
          <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
          <div className="rating">{renderStars(product.rating)}</div>
          <div className="price">
            <span style={{ fontWeight: "bold" }}>${product.price}</span>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

CardWithHover.propTypes = ProductCard.propTypes;

export default ProductCard;
