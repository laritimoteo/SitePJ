import React from "react";
import Prato from "./Prato";
import Modal from "./Modal";
import "./Sobremesas.css";

const sobremesas = [
  { nome: "Tiramisù D’Oro", descricao: "Clássico tiramisù com camadas de mascarpone e café espresso.", imgIndex: 1 },
  { nome: "Mousse Noir", descricao: "Mousse de chocolate belga com toque de baunilha de Madagascar.", imgIndex: 2 },
  { nome: "Cheesecake du Château", descricao: "Cheesecake cremoso com calda de frutas vermelhas frescas.", imgIndex: 3 },
  { nome: "Pavlova Étoile", descricao: "Merengue crocante com chantilly e seleção de frutas tropicais.", imgIndex: 4 },
  { nome: "Petit Gâteau", descricao: "Bolo de chocolate quente com recheio cremoso e sorvete artesanal.", imgIndex: 5 },
  { nome: "Crème Brûlée Dourado", descricao: "Creme de baunilha com cobertura caramelizada na hora.", imgIndex: 6 },
  { nome: "Torta Banoffee", descricao: "Torta de banana, doce de leite e chantilly caseiro.", imgIndex: 7 },
  { nome: "Soufflé de Lumière", descricao: "Soufflé aerado de chocolate meio amargo com toque cítrico.", imgIndex: 8 },
  { nome: "Panna Cotta Perla", descricao: "Panna cotta de baunilha com calda de frutas silvestres.", imgIndex: 9 },
  { nome: "Baba ao Rum Clássico", descricao: "Bolo embebido em rum envelhecido com chantilly de baunilha.", imgIndex: 10 },
  { nome: "Tarte Tatin", descricao: "Torta invertida de maçã caramelizada com toque de canela.", imgIndex: 11 },
  { nome: "Mousse de Chocolate com Framboesas", descricao: "Mousse de chocolate amargo, com framboesas frescas e leve calda de frutas vermelhas.", imgIndex: 12 },
];

const Sobremesas = () => {
  return (
    <div className="cardapio">
      <h1 className="titulo">Sobremesas</h1>
      <h2 className="subtitulo">
        <img src="https://cdn-icons-png.flaticon.com/128/4679/4679487.png" width="20" height="20" className="icon" />
        Les classiques
        <img src="https://cdn-icons-png.flaticon.com/128/4679/4679487.png" width="20" height="20" className="icon" />
      </h2>
      <p className="descricao-intro">
        Nossas sobremesas encantam com um equilíbrio perfeito entre doçura e criatividade. <br />
        Cada doce é uma verdadeira experiência para o paladar.
      </p>

      <div className="linha"></div>

      {sobremesas.map((sobremesa, index) => (
        <div key={index}>
          <Prato
            nome={sobremesa.nome}
            descricao={sobremesa.descricao}
            imgIndex={sobremesa.imgIndex}
            categoria="sob"
          />
          <div className="linha"></div>
        </div>
      ))}

      <Modal />
    </div>
  );
};

export default Sobremesas;
