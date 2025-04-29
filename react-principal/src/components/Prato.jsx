import React from "react";

const Prato = ({ nome, descricao, imagem }) => {
  const openModal = () => {
    document.getElementById("modalImage").src = imagem;
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
