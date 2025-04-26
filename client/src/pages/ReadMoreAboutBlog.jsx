// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";

// function ReadMoreAboutBlog() {
//   return (
//     <>
//       <Meta title={"Read More Blog"} />
//       <BreadCrumb title={"Read More Blog"} />
//       <div className="blog-wrapper home-wrapper-2 py-5">
//         <div className="container-xxl">
//           <div className="row">
//             {/* Sidebar */}
//             {/* <div className="col-3"></div> */}

//             {/* Blog Cards */}
//             <div className="col-12">
//               <div className="single-blog-card"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ReadMoreAboutBlog;

// import BlogCard from "../components/BlogCard";
// import { Link, useParams } from "react-router-dom";
// import { base_url } from "../utils/axiosConfig";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { AiOutlineBackward } from "react-icons/ai";
import blog1 from "../assets/images/blog-1.jpg";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const SingleBlog = () => {
  return (
    <div>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title={"Dynamic Blog Name"} />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <Col xs={12}>
              {/* Back button */}
              <Link className="btn d-flex align-items-center" to={"/blogs"}>
                <AiOutlineBackward className="me-2" />
                <span>Back to blog</span>
              </Link>

              {/* Blog Content */}
              <div className="single-blog-card mt-4">
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog1} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  numquam rem placeat est. Fugit odio mollitia exercitationem
                  vero nisi culpa veritatis velit asperiores dolores
                  deleniti?Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Nemo, quo!
                </p>
              </div>

              {/* Comment Form */}
              <Card className="p-4 mt-5 shadow-sm rounded-4">
                <h4 className="mb-4">Leave A Comment</h4>
                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Control
                          type="text"
                          placeholder="Name *"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Control
                          type="email"
                          placeholder="Email *"
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formComment" className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Comment *"
                      className="py-2"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-start">
                    <Button
                      variant="dark"
                      type="submit"
                      className="px-4 rounded-pill"
                    >
                      Post Comment
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlog;
