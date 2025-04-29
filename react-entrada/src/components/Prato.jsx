import React from "react";

const Prato = ({ nome, descricao, imgIndex }) => {
  const openModal = () => {
    document.getElementById("modalImage").src = `/img/ent${imgIndex}.jpg`;
    document.getElementById("modal").style.display = "flex";
  };

  return (
    <div className="prato">
      <a href="#" onClick={openModal}>{nome}</a>
      <p className="descricao">{descricao}</p>
    </div>
  );
};

export default Prato;
