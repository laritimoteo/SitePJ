import React from "react";
import Prato from "./Prato";
import Modal from "./Modal";
import "./Principal.css";

const pratosPrincipais = [
  { nome: "Lagosta ao Champagne", descricao: "Cauda de lagosta grelhada, servida com molho de champagne, purê de batata-baroa e aspargos frescos.", imgIndex: 1 },
  { nome: "Risoto de Frutos do Mar", descricao: "Risoto cremoso com camarões, mexilhões e polvo, finalizado com um toque de limão siciliano.", imgIndex: 2 },
  { nome: "Picanha de Cordeiro", descricao: "Corte de picanha de cordeiro grelhado, com molho de hortelã e couscous marroquino.", imgIndex: 3 },
  { nome: "Pescada Amarela ao Molho de Alho", descricao: "Pescada amarela grelhada, servida com molho de alho e batatas assadas.", imgIndex: 4 },
  { nome: "Polvo Grelhado com Batatas", descricao: "Tentáculos de polvo grelhados, servidos com batatas ao murro e azeite de ervas.", imgIndex: 5 },
  { nome: "Linguine com Lagosta", descricao: "Linguine fresco servido com lagosta, azeite de oliva e toque de pimenta rosa.", imgIndex: 6 },
  { nome: "Frango Assado ao Mel e Alecrim", descricao: "Peito de frango assado, com molho de mel e alecrim, acompanhado de batatas rústicas.", imgIndex: 7 },
  { nome: "Tomahawk Steak", descricao: "Corte premium de tomahawk steak grelhado, acompanhado de molho barbecue caseiro e legumes grelhados.", imgIndex: 8 },
  { nome: "Salmão Grelhado", descricao: "Salmão fresco grelhado, servido com molho de limão e mostarda, acompanhado de arroz basmati e brócolis ao vapor.", imgIndex: 9 },
  { nome: "Bacalhau à Brás", descricao: "Bacalhau desfiado misturado com batatas fritas e ovos, servido com azeitonas e salsa fresca.", imgIndex: 10 },
  { nome: "Costela de Porco ao Molho Barbecue", descricao: "Costela de porco assada lentamente, coberta com molho barbecue, acompanhada de salada coleslaw e milho grelhado.", imgIndex: 11 },
  { nome: "Pato Confitado", descricao: "Pato confitado, servido com molho de laranja e batatas gratinadas.", imgIndex: 12 },
  { nome: "Veggie Burger", descricao: "Hambúrguer de grão-de-bico e quinoa, servido com alface, tomate e molho especial em pão integral.", imgIndex: 13 },
  { nome: "Bife Wellington", descricao: "Filé mignon envolto em massa folhada, com cogumelos e patê, assado até o ponto perfeito.", imgIndex: 14 },
  { nome: "Robalo à la Meunière", descricao: "Robalo grelhado, servido com molho de manteiga, alcaparras e arroz de amêndoas.", imgIndex: 15 },
  { nome: "Quinoa com Legumes Grelhados", descricao: "Quinoa orgânica servida com legumes grelhados e molho de tahine, perfeita para uma refeição leve e saudável.", imgIndex: 16 }
];

const Principal = () => {
  return (
    <div className="cardapio">
      <h1 className="titulo">Pratos Principais</h1>
      <h2 className="subtitulo">
        <img src="https://cdn-icons-png.flaticon.com/128/4973/4973775.png" loading="lazy" width="25" height="25" className="icon"/>
        Pratos Principais
        <img src="https://cdn-icons-png.flaticon.com/128/4973/4973775.png" loading="lazy" width="25" height="25" className="icon"/>
      </h2>
      <p className="descricao-intro">
        Uma seleção de pratos principais sofisticados para uma experiência gastronômica única.
      </p>
      <div className="linha"></div>

      {pratosPrincipais.map((prato, index) => (
        <div key={index}>
          <Prato nome={prato.nome} descricao={prato.descricao} imagem={`/img/pri${prato.imgIndex}.jpg`} />
          <div className="linha"></div>
        </div>
      ))}

      <Modal />
    </div>
  );
};

export default Principal;
