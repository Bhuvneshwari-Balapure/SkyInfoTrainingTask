import { Card, Button } from "react-bootstrap";
import blog1 from "../assets/images/blog-1.jpg";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <Card
      className="shadow-sm rounded"
      style={{ width: "18rem", border: "none" }}
    >
      <Card.Img variant="top" src={blog1} alt="VR Experience" />
      <Card.Body>
        <small className="text-muted">1 Dec, 2022</small>
        <Card.Title className="mt-2" style={{ fontWeight: "bold" }}>
          A beautiful{" "}
          <span style={{ fontWeight: "normal" }}>
            sunday morning renaissance
          </span>
        </Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia.
        </Card.Text>
        <Link as={Link} to="/readMoreAboutBlog/:id">
          <Button variant="dark" className="rounded-pill px-4 py-2">
            Read More
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
