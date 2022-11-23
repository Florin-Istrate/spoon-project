import "./modal.css";

const Modal = ({ children, showModal, handleCloseBtn }) => {
  return showModal ? (
    <div className="custom-modal-wrapper">
      <div className="custom-modal-content  m-3">
        <button
          className="btn btn-close m-3"
          style={{ float: "right" }}
          onClick={handleCloseBtn}
        ></button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
