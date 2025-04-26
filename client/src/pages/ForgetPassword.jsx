import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <>
      <Meta title={"Forget password"} />
      <BreadCrumb title={"Forget password"} />

      <section
        className="py-5 d-flex align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow p-4 rounded-4">
                <h2 className="text-center mb-4">Forgeted Your Password</h2>
                <p className="text-center my-2">
                  We will send you an email to resset your password
                </p>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="py-2"
                    />
                  </Form.Group>

                  <div className="text-end mb-3">
                    <Link
                      to="/forget-password"
                      className="small text-decoration-none"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                      variant="dark"
                      type="submit"
                      className="px-4 rounded-pill"
                    >
                      Submit
                    </Button>

                    <Link to="/login" className="text-decoration-none">
                      <Button
                        variant="warning"
                        type="button"
                        className="px-4 rounded-pill text-white"
                      >
                        Cancel
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

export default ForgetPassword;
