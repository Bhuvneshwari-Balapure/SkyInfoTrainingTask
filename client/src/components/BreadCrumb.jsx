import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;

  return (
    <div className="breadCrumb bg-white py-3 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p className="text-center mb-0">
              <Link className="text-dark" to={"/"}>
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BreadCrumb;
