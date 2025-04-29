import React from "react";
import Prato from "./Prato";
import Modal from "./Modal";
import "./Menu.css";

const pratos = [
  { nome: "Salmone del Mare", descricao: "Salmão curado, finas fatias de pepino e molho de mostarda Dijon.", imgIndex: 1 },
  { nome: "Tartar di Mare Fresco", descricao: "Tartar de atum fresco com guacamole e crocante de gergelim.", imgIndex: 2 },
  { nome: "Bruschetta alla Truffle", descricao: "Pão rústico com tomates frescos, manjericão e azeite trufado.", imgIndex: 3 },
  { nome: "Risotto di Funghi Selvatici", descricao: "Risoto de cogumelos selvagens e queijo parmesão, leve toque de trufas.", imgIndex: 4 },
  { nome: "Ravioli della Campagna", descricao: "Ravioli recheado com ricota e espinafre, servido com molho de tomate e manjericão.", imgIndex: 5 },
  { nome: "Carpaccio di Manzo", descricao: "Finas fatias de carne bovina, azeite trufado, lascas de parmesão e rúcula.", imgIndex: 6 },
  { nome: "Crema di Zucca e Noci", descricao: "Sopa cremosa de abóbora com creme de leite e nozes torradas.", imgIndex: 7 },
  { nome: "Tartar di Pesce Bianco", descricao: "Tartar de peixe branco com cebola roxa, limão siciliano e caviar.", imgIndex: 8 },
  { nome: "Ostriche del Paradiso", descricao: "Ostras frescas com vinagrete de limão siciliano e pimenta rosa.", imgIndex: 9 },
  { nome: "Ceviche del Mar", descricao: "Ceviche de peixe branco com leite de coco, manga e pimenta dedo-de-moça.", imgIndex: 10 }
];

const Menu = () => {
  return (
    <div className="cardapio">
      <h1 className="titulo">Menu Executivo</h1>
      <h2 className="subtitulo">
        <img src="https://cdn-icons-png.flaticon.com/128/7409/7409344.png" loading="lazy" width="20" height="20" className="icon"/>
        Entradas
        <img src="https://cdn-icons-png.flaticon.com/128/7409/7409344.png" loading="lazy" width="20" height="20" className="icon"/>
      </h2>
      <p className="descricao-intro">
    Nossas entradas combinam leveza e sofisticação para preparar seu paladar.<br />
    Cada prato traz ingredientes frescos e sabores marcantes.
</p>

<div className="linha"></div> {}

      {pratos.map((prato, index) => (
        <div key={index}>
          <Prato nome={prato.nome} descricao={prato.descricao} imgIndex={prato.imgIndex} />
          <div className="linha"></div>
        </div>
      ))}

      <Modal />
    </div>
  );
};

export default Menu;
