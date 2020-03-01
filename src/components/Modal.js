import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { func, node } from "prop-types";

const Modal = ({ onDismiss, children }) => {
  useEffect(() => {
    const handleEsc = event => {
      event.keyCode === 27 && onDismiss();
    };
    window.addEventListener("keydown", handleEsc);
  }, [onDismiss]);

  return ReactDOM.createPortal(
    <div className="portal" onClick={onDismiss}>
      {children}
    </div>,
    document.querySelector("#portal")
  );
};

Modal.propTypes = {
  onDismiss: func.isRequired,
  children: node.isRequired
};

export default Modal;
