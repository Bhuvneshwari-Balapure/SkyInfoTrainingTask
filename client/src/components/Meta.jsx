// import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
