import { Col, Container, Row, Card } from "react-bootstrap";
// import camera from "../assets/images/camera.jpg";
// import smartwatch from "../assets/images/watch.jpg";
// import applewatch from "../assets/images/watch.jpg";

const PopularProducts = () => {
  return (
    <Container className="my-5">
      <h4 className="mb-4">Our Popular Products</h4>
      <Row>
        {/* Side Category List */}
        <Col>
          <Card className="p-3"></Card>
        </Col>

        {/* Featured Promo Card */}
        <Col></Col>

        {/* Product Cards */}
        <Col></Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default PopularProducts;
