import { Container, Row, Col, Image } from "react-bootstrap";

// Sample image imports (you'll need to add these to your assets folder)
import dell from "../assets/images/brand-01.png";
import lg from "../assets/images/brand-02.png";
import bose from "../assets/images/brand-03.png";
import samsung from "../assets/images/brand-04.png";
import canon from "../assets/images/brand-05.png";
import apple from "../assets/images/brand-06.png";
import intel from "../assets/images/brand-07.png";
import SanDisk from "../assets/images/brand-08.png";

const logos = [dell, lg, bose, samsung, canon, apple, intel, SanDisk];

const BrandMarquee = () => {
  return (
    <Container className="my-5 py-3 rounded bg-white shadow-sm overflow-hidden brand-marquee">
      <Row className="d-flex align-items-center flex-nowrap scroll-x">
        {logos.map((logo, idx) => (
          <Col key={idx} className="flex-shrink-0 text-center px-4">
            <Image
              src={logo}
              alt={`brand-${idx}`}
              fluid
              style={{ height: "50px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandMarquee;
