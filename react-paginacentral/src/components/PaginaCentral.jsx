import React, { useState } from "react";
import "./PaginaCentral.css";



function PaginaCentral() {
  // Estado para controlar o idioma
  const [language, setLanguage] = useState('PT');

  // Função para alternar o idioma
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">{language === 'PT' ? 'Restaurante' : 'Restaurant'}</a></li>
            <li><a href="#chef">{language === 'PT' ? 'Chef' : 'Chef'}</a></li>
            <li className="dropdown">
              <a href="#">{language === 'PT' ? 'Menu' : 'Menu'}</a>
              <ul className="dropdown-menu">

                <li><a href="http://localhost:5175" target="_blank">{language === 'PT' ? 'Entradas' : 'Appetizers'}</a></li>
                <li><a href="http://localhost:5175" target="_blank">{language === 'PT' ? 'Prato Principal' : 'Main Dish'}</a></li>
                <li><a href="http://localhost:5174/" target="_blank">{language === 'PT' ? 'Sobremesa' : 'Dessert'}</a></li>
                <li><a href="http://localhost:5177" target="_blank">{language === 'PT' ? 'Bebidas' : 'Drinks'}</a></li>
              </ul>
              
            </li>
            <li><a href="#">{language === 'PT' ? 'Reservas' : 'Reservations'}</a></li>
            <li className="lang">
              <a href="#" onClick={() => toggleLanguage('PT')}>PT</a> | 
              <a href="#" onClick={() => toggleLanguage('EN')}>EN</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/img/prato.png" alt="Prato gourmet" />
          <h1>{language === 'PT' ? 'Onde o fogo e a culinária se encontram' : 'Where fire and cuisine meet'}</h1>
          <h2>{language === 'PT' ? 'em pratos inspiradores' : 'in inspiring dishes'}</h2>
          <button>{language === 'PT' ? 'Reservas' : 'Reservations'}</button>
        </section>

        <section className="about">
          <div className="about-container">
            <img src="/img/prato2.png" alt="Prato sofisticado" />
            <div className="about-text">
              <h3><span></span> {language === 'PT' ? 'restaurante' : 'restaurant'} <span></span></h3>
              <p>
                {language === 'PT' 
                  ? 'Fundado em 2007, o SENÍLIA tem uma trajetória marcada por muitos prêmios, inovações e revoluções na cena gastronômica brasileira. Premiado como melhor restaurante em inúmeras e importantes publicações da cena gastronômica, o restaurante foi contemplado, em 2015, com uma estrela no Guia Michelin e em 2018 conquistou sua 2ª estrela. Em 2016 ganhou em três categorias no prêmio Veja Rio Comer e Beber: Chef do Ano, Melhor Contemporâneo e Sommelier do Ano.' 
                  : 'Founded in 2007, SENÍLIA has a history marked by many awards, innovations, and revolutions in the Brazilian gastronomic scene. Awarded as the best restaurant in numerous important gastronomic publications, the restaurant was awarded a Michelin star in 2015 and earned its 2nd star in 2018. In 2016, it won three categories at the Veja Rio Comer e Beber awards: Chef of the Year, Best Contemporary, and Sommelier of the Year.'}
              </p>
            </div>
          </div>
        </section>

        <section className="menu-section">
          <div className="menu-text">
            <h2>{language === 'PT' ? 'menu' : 'menu'}</h2>
            <p>
              {language === 'PT'
                ? 'Nossa cozinha valoriza a brasa como elemento central na criação de cada prato. O menu é pensado para oferecer uma experiência completa, com entrada, prato principal e sobremesa, sempre respeitando a sazonalidade dos ingredientes. Para acompanhar, uma seleção especial de vinhos e drinks complementa a harmonização. Reserve sua mesa e descubra sabores marcantes em cada detalhe.'
                : 'Our cuisine values fire as a central element in the creation of each dish. The menu is designed to offer a complete experience, with appetizers, main courses, and desserts, always respecting the seasonality of ingredients. A special selection of wines and drinks complements the harmonization. Book your table and discover bold flavors in every detail.'}
            </p>
            <button>{language === 'PT' ? 'cardápio' : 'menu'}</button>
          </div>
          <div className="menu-img-wrapper">
            <img src="/img/iamgem.png" alt="Prato bonito" />
          </div>
        </section>


        
        <section className="chef-section" id="chef">
  <div className="chef-container">
    <img src="/img/Chef.JPG" alt="Foto do Chef" className="chef-image" />
    <div className="chef-text">
      <h2 className="chef-title">chef</h2>
      {language === 'PT' ? (
        <>
          <p>
            Larissa Timóteo é formada em Artes Culinárias pelo “Culinary Institute of America”. Em dois anos de carreira como chef, Timóteo foi premiada cinco vezes como <strong>“Chef do Ano”</strong> pela revista “Veja Rio” e três vezes pelo jornal “O Globo”.
          </p>
          <p>
            O Senília foi eleito <strong>“Melhor Restaurante”</strong> da cidade, tendo recebido sua primeira estrela no Guia Michelin em 2013. Em 2017, alcançou a cotação de <strong>duas estrelas Michelin</strong>, sendo um dos três restaurantes da América Latina a obter essa distinção.
          </p>
          <p>
            Também foi considerado <strong>“One to watch”</strong> pela revista britânica The Restaurant e entrou em 2018 na lista dos <strong>“50 Best Latin America”</strong>.
          </p>
          <p>
            Larissa é também apresentadora de programas como “Que Seja Doce” e “The Taste Brasil”.
          </p>
        </>
      ) : (
        <>
          <p>
            Larissa Timóteo is trained in Culinary Arts from the “Culinary Institute of America.” In two years of her career as a chef, Timóteo was awarded five times as <strong>“Chef of the Year”</strong> by “Veja Rio” magazine and three times by the newspaper “O Globo.”
          </p>
          <p>
            Senília was elected <strong>“Best Restaurant”</strong> in the city, receiving its first Michelin star in 2013. In 2017, it earned <strong>two Michelin stars</strong>, becoming one of the three restaurants in Latin America to achieve this distinction.
          </p>
          <p>
            It was also considered <strong>“One to watch”</strong> by the British magazine The Restaurant and entered the <strong>“50 Best Latin America”</strong> list in 2018.
          </p>
          <p>
            Larissa is also a host of shows like “Que Seja Doce” and “The Taste Brasil”.
          </p>
        </>
      )}
    </div>
  </div>
</section>

      </main>



      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <p>📍 Rua das Estações, 88 – Vila Serenidade</p>
            <p>São Paulo / SP – 04500-123</p>
            <div>
              <a href="#">Google Maps</a> | <a href="#">Waze</a>
            </div>
          </div>

          <div className="footer-column">
            <p>📞 [12] 9964-2596</p>
            <p>✉️ seniliarestau@gmail.com</p>
            <p>🕒 Terça a Sexta: 18h30</p>
            <p>🕒 Sábado: 18h e 21h</p>
            <p><em>Atendemos apenas com reservas.</em></p>
          </div>

          <div className="footer-column">
            <div className="footer-social">
              <p><a href="https://www.instagram.com/restaurantesenilia/">📷 Instagram</a></p>
            </div>
          </div>
        </div>

        <div style={{ overflow: "hidden", height: "200px" }}>
          <svg viewBox="0 0 4000 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C100,90 200,150 300,120 C400,90 500,150 600,120 C700,90 800,150 900,120 C1000,90 1100,150 1200,120 C1300,90 1400,150 1500,120 C1600,90 1700,150 1800,120 C1900,90 2000,150 2100,120 C2200,90 2300,150 2400,120 C2500,90 2600,150 2700,120 C2800,90 2900,150 3000,120 C3100,90 3200,150 3300,120 C3400,90 3500,150 3600,120 C3700,90 3800,150 3900,120 C3950,110 4000,130 4000,130" />
            <circle cx="80" cy="50" r="15" />
            <line x1="80" y1="20" x2="80" y2="0" />
            <line x1="80" y1="80" x2="80" y2="100" />
            <line x1="50" y1="50" x2="30" y2="50" />
            <line x1="110" y1="50" x2="130" y2="50" />
            <line x1="60" y1="30" x2="45" y2="15" />
            <line x1="100" y1="30" x2="115" y2="15" />
            <line x1="60" y1="70" x2="45" y2="85" />
            <line x1="100" y1="70" x2="115" y2="85" />
            <path d="M250,130 Q265,120 280,130 Q265,140 250,130 M280,130 L290,125 L290,135 Z" />
            <path d="M500,140 q20,-20 50,0 q-10,-10 -15,-25 q5,5 10,0 q-10,-10 -25,-10 q-25,0 -40,20 q-10,10 -10,15 Z" />
            <line x1="870" y1="130" x2="870" y2="100" />
            <path d="M850,100 Q870,70 890,100 Z" />
            
            
          </svg>
        </div>

        <div className="footer-bottom">
          © Senilia. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}

export default PaginaCentral;
