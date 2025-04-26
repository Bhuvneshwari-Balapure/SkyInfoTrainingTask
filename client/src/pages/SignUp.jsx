import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SignUp() {
  return (
    <>
      <Meta title={"Sign Up"} />
      <Breadcrumb title={"Sign Up"} />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-center mb-4">Create Account</h2>
              <Form>
                <Form.Group className="mb-3" controlId="firstname">
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    variant="dark"
                    type="submit"
                    className="px-5 rounded-pill"
                  >
                    Create
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;
