import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

function ResetPassword() {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title={"Reset Password"} />

      <section
        className="py-5 d-flex align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="shadow p-4 rounded-4">
                <h2 className="text-center mb-4">Reset Password</h2>
                <Form>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="confirmPassword" className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="py-2"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <Button
                      variant="dark"
                      type="submit"
                      className="px-5 rounded-pill"
                    >
                      Ok
                    </Button>
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

export default ResetPassword;
