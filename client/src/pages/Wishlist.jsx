// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
// import cross from "../assets/images/cross.svg";
// import watch from "../assets/images/watch.jpg";
// function Wishlist() {
//   return (
//     <>
//       <Meta title={"Wishlist"} />
//       <BreadCrumb title={"Wishlist"} />

//       <div className="blog-wrapper home-wrapper-2 py-5">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-3">
//               <div className="wishlist-card position-relative">
//                 <img
//                   src={cross}
//                   alt="cross"
//                   className="position-absolute cross img-fluid"
//                 />
//                 <div className="whishlist-card-image">
//                   <img src={watch} alt="watch" className="img-fluid w-100" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Wishlist;

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import cross from "../assets/images/cross.svg";
import watch from "../assets/images/watch.jpg";

function Wishlist() {
  const wishlist = [
    {
      id: 1,
      title: "Milanese Loop Watch Band For 42mm/44mm Apple Watch",
      price: "$10.00",
      image: watch,
    },
    {
      id: 2,
      title: "Sony EXTRA BASS Portable Splash-Proof Wireless Speaker",
      price: "$220.00",
      image: watch,
    },
    // add more items if you want
  ];
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />

      <section className="py-5">
        <Container>
          <Row>
            {wishlist.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card className="position-relative shadow-sm h-100">
                  <Image
                    src={cross}
                    alt="cross"
                    className="position-absolute"
                    style={{
                      top: "10px",
                      right: "10px",
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                  />
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="img-fluid"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fs-6">{item.title}</Card.Title>
                    <Card.Text className="fw-bold">{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/* <Col xs={12} sm={6} md={4} lg={3}> */}
            {/* <Card className="position-relative shadow-sm">
                <Image
                  src={cross}
                  alt="cross"
                  className="position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
                <Card.Img variant="top" src={watch} className="img-fluid" />
                <Card.Body className="text-center">
                  <Card.Title className="fs-6">
                    Milanese Loop Watch Band For 42mm/44mm Apple Watch
                  </Card.Title>
                  <Card.Text className="fw-bold">$10.00</Card.Text>
                </Card.Body>
              </Card> */}
            {/* </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Wishlist;
