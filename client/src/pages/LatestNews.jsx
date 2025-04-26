import { Container, Row, Col, Card, Button } from "react-bootstrap";
import blog1 from "../assets/images/blog-1.jpg";
import watch from "../assets/images/watch.jpg";
const newsItems = [
  {
    date: "11 JUNE, 2022",
    title: "A Beautiful Sunday Morning Renaissance",
    description:
      "You’re only as good as your last collection, which is an enormous pressure...",
    image: blog1,
  },
  {
    date: "11 JUNE, 2022",
    title: "Sed Ut Perspiciatis Unde Omnis...",
    description:
      "To enjoy alternately the sight of their distress. He really shouted with pleasure...",
    image: watch,
  },
  {
    date: "11 JUNE, 2022",
    title: "Vitae Magnis Fusce Laoreet Porttitor...",
    description:
      "You’re only as good as your last collection, which is an enormous pressure...",
    image: blog1,
  },
  {
    date: "11 JUNE, 2022",
    title: "Urna Pretium Elit Mauris Cursus Curabitu",
    description:
      "You’re only as good as your last collection, which is an enormous pressure...",
    image: watch,
  },
];

const LatestNews = () => {
  return (
    <Container className="my-5">
      <h3 className="mb-4 fw-bold">Our Latest News</h3>
      <Row>
        {newsItems.map((item, idx) => (
          <Col key={idx} md={6} lg={3} className="mb-4">
            <Card className="shadow-sm h-100 rounded-4 overflow-hidden">
              <Card.Img variant="top" src={item.image} className="news-img" />
              <Card.Body>
                <small className="text-muted">{item.date}</small>
                <Card.Title className="mt-2 fs-6 fw-bold text-truncate">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-muted small text-truncate">
                  {item.description}
                </Card.Text>
                <Button variant="dark" size="sm" className="rounded-pill mt-2">
                  READ MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestNews;
