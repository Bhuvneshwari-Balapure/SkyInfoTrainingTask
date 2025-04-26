import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Container, Row, Col, Card } from "react-bootstrap";

function PrivacyPolicy() {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title={"Privacy Policy"} />

      <section className="privacy-wrapper home-wrapper-2 py-5">
        <Container>
          <Row>
            <Col md={12}>
              <Card className="p-4 shadow-sm rounded-4">
                <h3 className="mb-3">The Standard Lorem Ipsum Passage</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  accumsan turpis posuere cursus ultricies. Ut nunc justo,
                  faucibus eget elit quis, vehicula rhoncus nulla. Phasellus
                  convallis sem nec facilisis commodo. Fusce ut molestie turpis.
                  Suspendisse aliquet sed massa in vulputate. Quisque gravida
                  suscipit tincidunt.
                </p>

                <h3 className="mb-3">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos
                </h3>
                <p className="mb-4">
                  Mauris elementum scelerisque elit non egestas. Cras lacus
                  nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros
                  lectus, aliquam eu aliquam id, fringilla nec eros. Praesent
                  suscipit commodo diam, non viverra turpis dapibus malesuada.
                  Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.
                </p>

                <h3 className="mb-3">
                  Certain Circumstances And Owing To The Claims Of Duty Or The
                  Obligations
                </h3>
                <p className="mb-4">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes.
                </p>

                <h3 className="mb-3">
                  Integer Ultrices Laoreet Nunc In Gravida
                </h3>
                <p className="mb-0">
                  Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Mauris
                  suscipit dolor scelerisque, bibendum tellus ac, pharetra
                  sapien. Praesent lacinia scelerisque odio et consequat. In a
                  facilisis lacus. Maecenas vel lobortis tellus.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
