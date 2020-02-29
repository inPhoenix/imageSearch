import React from "react";
import ReactDOM from "react-dom";
import { func, node } from "prop-types";

const Modal = ({ onDismiss, children }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss}>{children}</div>,
    document.querySelector("#portal")
  );
};

Modal.propTypes = {
  onDismiss: func.isRequired,
  children: node.isRequired
};

export default Modal;
