import React from "react";

const Prato = ({ nome, descricao, imgIndex, categoria }) => {
  const openModal = () => {
    let prefixo = "ent"; // valor padrão

    if (categoria === "bebidas") {
      prefixo = "beb";
    }

    document.getElementById("modalImage").src = `/img/${prefixo}${imgIndex}.jpg`;
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

