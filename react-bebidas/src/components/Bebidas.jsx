// Bebidas.jsx
import React from "react";
import Prato from "./Prato";
import Modal from "./Modal";
import "./Bebidas.css";

const bebidas = [
  // Não alcoólicas
  { nome: "Água Mineral Natural", descricao: "Água pura e refrescante, ideal para acompanhar qualquer refeição.", imgIndex: 1 },
  { nome: "Água com Gás", descricao: "Água gaseificada, perfeita para quem gosta de um toque de efervescência.", imgIndex: 2 },
  { nome: "Suco de Laranja", descricao: "Feito com laranjas frescas espremidas na hora.", imgIndex: 3 },
  { nome: "Suco de Limão", descricao: "Refrescante e equilibrado entre o doce e o ácido.", imgIndex: 4 },
  { nome: "Suco de Maracujá", descricao: "Levemente ácido e muito aromático.", imgIndex: 5 },
  { nome: "Suco de Abacaxi", descricao: "Doce e tropical, pode ser servido puro ou com hortelã.", imgIndex: 6 },
  { nome: "Suco de Morango", descricao: "Cremoso e adocicado, excelente para qualquer momento.", imgIndex: 7 },
  { nome: "Chá Gelado de Limão", descricao: "Chá preto com limão e um toque de açúcar.", imgIndex: 8 },
  { nome: "Chá Gelado de Pêssego", descricao: "Sabor suave e levemente adocicado.", imgIndex: 9 },
  { nome: "Chá Verde Gelado", descricao: "Refrescante e levemente amargo, ideal para acompanhar refeições leves.", imgIndex: 10 },

  // Alcoólicas
  { nome: "Margarita", descricao: "Tequila premium, licor de laranja e suco de limão, servida com borda de sal para um toque final perfeito.", imgIndex: 11 },
  { nome: "Piña Colada", descricao: "Uma deliciosa mistura de rum, abacaxi e leite de coco, trazendo o sabor das praias tropicais para seu copo.", imgIndex: 12 },
  { nome: "Dry Martini", descricao: "Elegante e sofisticado, feito com gin e vermute seco, servido com uma azeitona ou twist de limão.", imgIndex: 13 },
  { nome: "Negroni", descricao: "Um drink italiano clássico com gin, vermute tinto e Campari, trazendo um equilíbrio perfeito entre amargo e doce.", imgIndex: 14 },
  { nome: "French 75", descricao: "Elegante combinação de gin, champagne, suco de limão e açúcar, trazendo frescor e sofisticação.", imgIndex: 15 },
  { nome: "Aperol Spritz", descricao: "Refrescante combinação de Aperol, espumante e água com gás, perfeito para momentos elegantes e descontraídos.", imgIndex: 16 },
  { nome: "Espresso Martini", descricao: "Uma combinação perfeita de vodka, licor de café e café espresso, criando um drink sofisticado e energético.", imgIndex: 17 },
  { nome: "Margarita Royale", descricao: "Uma variação luxuosa da Margarita, feita com tequila premium, licor de laranja, limão e um toque de espumante.", imgIndex: 18 },
];

const Bebidas = () => {
  const naoAlcoolicas = bebidas.slice(0, 10);
  const alcoolicas = bebidas.slice(10);

  return (
    <div className="cardapio">
      <h1 className="titulo">Bebidas</h1>

      <h2 className="subtitulo">
        <img src="https://cdn-icons-png.flaticon.com/128/3126/3126588.png" width="20" height="20" className="icon" />
        Les classiques
        <img src="https://cdn-icons-png.flaticon.com/128/3126/3126588.png" width="20" height="20" className="icon" />
      </h2>
      <p className="descricao-intro">
        Selecione entre nossas bebidas sofisticadas para acompanhar sua refeição.
      </p>
      <div className="linha"></div>

      {naoAlcoolicas.map((bebida, index) => (
        <div key={index}>
          <Prato nome={bebida.nome} descricao={bebida.descricao} imgIndex={bebida.imgIndex} categoria="bebidas" />
          <div className="linha"></div>
        </div>
      ))}

      <br /><br /><hr /><br />

      <h2 className="subtitulo">
        <img src="https://cdn-icons-png.flaticon.com/128/4441/4441978.png" width="20" height="20" className="icon" />
        Alcoholic
        <img src="https://cdn-icons-png.flaticon.com/128/4441/4441978.png" width="20" height="20" className="icon" />
      </h2>
      <div className="linha"></div>

      {alcoolicas.map((bebida, index) => (
        <div key={index}>
          <Prato nome={bebida.nome} descricao={bebida.descricao} imgIndex={bebida.imgIndex} categoria="bebidas" />
          <div className="linha"></div>
        </div>
      ))}

      <Modal />
    </div>
  );
};

export default Bebidas;
