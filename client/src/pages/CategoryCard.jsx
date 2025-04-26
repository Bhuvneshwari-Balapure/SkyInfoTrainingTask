import { Container, Row, Col, Card } from "react-bootstrap";
import cameraImg from "../assets/images/camera.jpg";
import tv from "../assets/images/tv.jpg";
import headphone from "../assets/images/headphone.jpg";

const categories = [
  { title: "Smart Watches", items: 10, img: cameraImg },
  { title: "Smart Watches", items: 10, img: tv },
  { title: "Smart Watches", items: 10, img: tv },
  { title: "Smart Watches", items: 10, img: headphone },
];

const CategoryCard = () => {
  // Break the categories into chunks of 4
  const rows = [categories.slice(0, 4), categories.slice(4, 8)];

  return (
    <Container className="my-5">
      {rows.map((rowItems, i) => (
        <Row className="mb-4" key={i}>
          {rowItems.map((cat, index) => (
            <Col key={index} md={3}>
              <Card className="text-center p-3 shadow-sm h-100">
                <Card.Body className="cardContent">
                  <Card.Title>
                    {cat.title}
                    <Card.Text style={{ fontSize: "16px", color: "gray" }}>
                      {cat.items} Items
                    </Card.Text>
                  </Card.Title>

                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="img-fluid"
                    style={{ maxHeight: "80px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CategoryCard;
