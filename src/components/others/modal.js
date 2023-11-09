import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Devloom Demo Version</h2>
        <p>You are using the demo version of Devloom.</p>
        <p>Please consider buying a license to unlock all features.</p>
        <p>30-day money back guarantee. No question asked.</p>
        <a href="https://get.devloom.net" className="modal-button">
          Buy License
        </a>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
