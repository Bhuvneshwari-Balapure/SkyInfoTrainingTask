import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { FaHome, FaPhone, FaEnvelope, FaInfo } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title={"Contact"} />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7332.356543097821!2d77.43038893488769!3d23.236599000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439dc43552c1%3A0xd09e5a07394b6cf9!2sSKY%20Infotech!5e0!3m2!1sen!2sin!4v1745564305375!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Section */}
            <div className="col-12 mt-5">
              <div className="row">
                {/* Contact Form */}
                <div className="col-md-6">
                  <h3 className="mb-4">Contact</h3>
                  <form className="d-flex flex-column gap-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      required
                    />
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                      rows="4"
                    ></textarea>
                    <button type="submit" className="btn btn-dark">
                      Send
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="col-md-6">
                  <h3 className="mb-4">Get In Touch With Us</h3>
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    <li className="d-flex align-items-center gap-2">
                      <FaHome />
                      <address className="mb-0">
                        33 New Montgomery St. Ste 750 San Francisco, CA, USA
                        94105
                      </address>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <FaPhone />
                      <a
                        href="tel:+9177234608"
                        className="text-decoration-none"
                      >
                        (+91) 7723-4608
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <FaEnvelope />
                      <a
                        href="mailto:demo@company.com"
                        className="text-decoration-none"
                      >
                        demo@company.com
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <FaInfo />
                      Monday – Friday 10 AM – 8 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Contact Section */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
