import PropTypes from "prop-types";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name, val, onChng, onBlr } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  i_id: PropTypes.string,
  i_class: PropTypes.string,
  name: PropTypes.string,
  val: PropTypes.string,
  onChng: PropTypes.func,
  onBlr: PropTypes.func,
};

export default CustomInput;
