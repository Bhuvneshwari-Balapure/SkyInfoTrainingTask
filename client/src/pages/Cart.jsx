import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import watch from "../assets/images/watch.jpg";
function Cart() {
  return (
    <>
      <Meta title={"Your Shopping Cart"} />
      <BreadCrumb title={"Your Shopping Cart"} />

      <Container className="py-5">
        <Row>
          <Col md={12}>
            <Table responsive bordered className="align-middle text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start d-flex align-items-center gap-3">
                    <img src={watch} alt="image" className="img-fluid" />
                    <div>
                      <h6>
                        Kids headphones bulk 10 pack multi colored for students
                      </h6>
                      <p className="mb-1">Size: S</p>
                      <p className="mb-0">Color: #A85A5A</p>
                    </div>
                  </td>
                  <td>$100.00</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <Button
                        variant="light"
                        size="sm"
                        style={{ fontSize: "25px" }}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="text"
                        value="1"
                        className="text-center"
                        style={{ width: "50px" }}
                        readOnly
                      />
                      <Button
                        variant="light"
                        size="sm"
                        style={{ fontSize: "25px" }}
                      >
                        +
                      </Button>
                      {/* Delete Product From Cart */}
                      <BsTrash
                        color="red"
                        size={20}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </td>
                  <td>$100.00</td>
                </tr>
              </tbody>
            </Table>

            <div className="d-flex justify-content-between flex-wrap mt-4">
              <Link as={Link} to="/">
                <Button
                  style={{ padding: "8px", height: "50px" }}
                  variant="dark"
                >
                  Continue Shopping
                </Button>
              </Link>

              <div className="d-flex flex-column align-items-end">
                <h5>
                  Subtotal: <b>$100.00</b>
                </h5>
                <p>Taxes and shipping calculated at checkout</p>
                <Link as={Link} to="/checkout">
                  <Button variant="dark">Check Out</Button>
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <h6>Order special instructions</h6>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Instructions here..."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
