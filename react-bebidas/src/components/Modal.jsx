import React from "react";
import "./Modal.css"; 

const Modal = ({ imagem }) => {
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  return (
    <div id="modal" className="img-modal" onClick={closeModal}>
      <div className="modal-content">
        <img id="modalImage" src={imagem} alt="Imagem do prato" />
        <span className="close" onClick={closeModal}>×</span>
      </div>
    </div>
  );
};

export default Modal;
