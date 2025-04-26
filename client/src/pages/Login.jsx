import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />

      <section
        className="py-5 d-flex align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow p-4 rounded-4">
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="py-2"
                    />
                  </Form.Group>

                  {/* <div className="text-end mb-3">
                    <a href="#" className="small text-decoration-none">
                      <Link as={Link} to="/forget-password">Forgot your password?</link>
                    </a>
                  </div> */}

                  <div className="text-end mb-3">
                    <Link
                      to="/forget-password"
                      className="small text-decoration-none"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div className="d-flex justify-content-around">
                    <Link as={Link} to="/login">
                      <Button
                        variant="dark"
                        type="submit"
                        className="px-4 rounded-pill"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link as={Link} to="/signup">
                      <Button
                        variant="warning"
                        type="button"
                        className="px-4 rounded-pill text-white"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
