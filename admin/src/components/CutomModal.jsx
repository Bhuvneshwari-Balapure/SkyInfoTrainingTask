import PropTypes from "prop-types";
import { Modal } from "antd";

const CustomModal = (props) => {
  const { open, hideModal, performAction, title } = props;
  return (
    <Modal
      title="Confirmation"
      open={open}
      onOk={performAction}
      onCancel={hideModal}
      okText="Ok"
      cancelText="Cancel"
    >
      <p>{title}</p>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  performAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomModal;
