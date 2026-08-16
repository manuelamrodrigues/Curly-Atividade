import { useState } from "react";
import "./App.css";
import heroImage from "./assets/img_hero_section.jpeg";
import heroBlond from "./assets/img_blond_2.jpeg";
import shampooImage from "./assets/curly-clean-shampoo.jpeg";
import gelatinaImage from "./assets/curly-define-gelatin.jpeg";
import leaveinImage from "./assets/curly-leave-in.jpeg";
import oleoImage from "./assets/curly-oil.jpeg";
import maskImage from "./assets/curly-mask.jpeg";
import blondemaskImage from "./assets/curly-blond-mask.jpeg";
import blondeoleoImage from "./assets/curly-blond-oil.jpeg";
import blondeprotectImage from "./assets/curly-blond-protect.jpeg";

const products = [
  {
    name: "Curly Clean",
    type: "Shampoo Hidratante",
    description:
      "Limpeza suave que preserva a hidratação natural dos fios.",
    price: "R$ 59,00",
    image: shampooImage,
  },
  {
    name: "Curly Mask",
    type: "Máscara de Hidratação",
    description:
      "Tratamento profundo para devolver maciez, brilho e movimento.",
    price: "R$ 69,90",
    image: maskImage,
  },
  {
    name: "Curly Leave-In",
    type: "Creme para Pentear",
    description:
      "Desembaraça, hidrata e ajuda a definir os cachos sem pesar.",
    price: "R$ 64,90",
    image: leaveinImage,
  },
  {
    name: "Curly Define",
    type: "Gelatina Modeladora",
    description:
      "Definição duradoura, movimento e controle do frizz.",
    price: "R$ 54,90",
    image: gelatinaImage,
  },
  {
    name: "Curly Oil",
    type: "Óleo Finalizador",
    description:
      "Brilho, nutrição e acabamento para finalizar seu ritual.",
    price: "R$ 62,00",
    image: oleoImage,
  },
];

const blondeProducts = [
  {
    name: "Blonde Mask",
    description: "Hidratação e cuidado para fios cacheados com luzes.",
    image: blondemaskImage,
  },
  {
    name: "Blonde Oil",
    description: "Brilho intenso e nutrição para cabelos iluminados.",
    image: blondeoleoImage,
  },
  {
    name: "Blonde Protect",
    description: "Proteção térmica e cuidado diário para os fios.",
    image: blondeprotectImage,
  },
];

const testimonials = [
  {
    name: "Marina, 23 anos",
    text: "Finalmente encontrei uma rotina que deixa meus cachos definidos sem pesar.",
  },
  {
    name: "Luiza, 21 anos",
    text: "O Leave-In virou meu produto favorito. Meu cabelo fica muito mais macio e definido.",
  },
  {
    name: "Camila, 25 anos",
    text: "Tenho luzes e sempre tive dificuldade para manter meus cachos hidratados. A linha Blonde fez muita diferença.",
  },
];

const faqs = [
  {
    question: "A CURLY funciona em todos os tipos de cachos?",
    answer:
      "Sim! A CURLY foi pensada para diferentes texturas de cabelos cacheados e ondulados, respeitando as necessidades de cada fio.",
  },
  {
    question: "Posso usar os produtos diariamente?",
    answer:
      "Sim. A rotina pode ser adaptada de acordo com as necessidades do seu cabelo e com a frequência de lavagem.",
  },
  {
    question: "A CURLY Blonde é indicada para cabelos com luzes?",
    answer:
      "Sim! A linha Blonde foi criada especialmente para complementar os cuidados de cabelos cacheados com coloração ou luzes.",
  },
  {
    question: "Preciso usar todos os produtos?",
    answer:
      "Não. Você pode montar seu ritual de acordo com o que seu cabelo precisa. A linha completa é uma sugestão de rotina.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">CURLY<span>.</span></div>

        <nav>
          <button onClick={() => scrollToSection("produtos")}>
            Produtos
          </button>

          <button onClick={() => scrollToSection("ritual")}>
            Nosso ritual
          </button>

          <button onClick={() => scrollToSection("blonde")}>
            Curly Blonde
          </button>

          <button onClick={() => scrollToSection("faq")}>
            FAQ
          </button>
        </nav>

        <button
          className="nav-cta"
          onClick={() => scrollToSection("kit")}
        >
          Conheça a CURLY
        </button>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <span className="eyebrow">
            HAIRCARE PARA SUA TEXTURA
          </span>

          <h1>
            Seu cabelo.
            <br />
            <em>Sua textura.</em>
            <br />
            Seu ritual.
          </h1>

          <p>
            Uma rotina criada para hidratar, definir e valorizar
            a beleza natural dos seus cachos.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => scrollToSection("produtos")}
            >
              Conheça a linha
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("blonde")}
            >
              Descubra CURLY Blonde →
            </button>
          </div>

        </div>

        <div className="hero-image">

          <div className="hero-circle">
            <img
              src={heroImage}
              alt="Cachos naturais CURLY"
            />
          </div>

          <img src="curly\src\assets\img_hero_section.jpeg" alt="" />

          <div className="floating-card">
            <span>✦</span>
            <div>
              <strong>Natural beauty</strong>
              <small>made for curls</small>
            </div>
          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="intro">

        <span className="eyebrow">O RITUAL CURLY</span>

        <h2>
          Cuidado que entende
          <br />
          <em>seus cachos.</em>
        </h2>

        <p>
          Mais do que uma linha de produtos, a CURLY é um ritual
          pensado para acompanhar cada etapa da sua rotina.
        </p>

      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="produtos">

        <div className="section-header">

          <div>
            <span className="eyebrow">A LINHA CURLY</span>

            <h2>
              Seu ritual,
              <br />
              <em>do início ao fim.</em>
            </h2>
          </div>

          <p>
            Cinco produtos para transformar o cuidado
            com seus cachos em um momento só seu.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product, index) => (
            <article className="product-card" key={product.name}>

              <div className={`product-image product-${index}`}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">

                <span className="product-number">
                  0{index + 1}
                </span>

                <h3>{product.name}</h3>

                <strong>{product.type}</strong>

                <p>{product.description}</p>

                <div className="product-bottom">
                  <span>{product.price}</span>

                  <button
                    onClick={() => setShowModal(true)}
                  >
                    Conhecer →
                  </button>
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* BENEFITS */}
      <section className="benefits">

        <div className="benefits-title">

          <span className="eyebrow">POR QUE CURLY?</span>

          <h2>
            Beleza natural,
            <br />
            <em>cuidado de verdade.</em>
          </h2>

        </div>

        <div className="benefits-grid">

          <div className="benefit">
            <span>01</span>
            <h3>Hidratação</h3>
            <p>
              Fórmulas pensadas para manter os fios
              hidratados e macios.
            </p>
          </div>

          <div className="benefit">
            <span>02</span>
            <h3>Definição</h3>
            <p>
              Mais definição, movimento e leveza
              para seus cachos.
            </p>
          </div>

          <div className="benefit">
            <span>03</span>
            <h3>Textura</h3>
            <p>
              Uma rotina que valoriza a textura
              natural dos seus fios.
            </p>
          </div>

          <div className="benefit">
            <span>04</span>
            <h3>Ritual</h3>
            <p>
              Transforme o cuidado com o cabelo
              em um momento para você.
            </p>
          </div>

        </div>

      </section>

      {/* BLONDE */}
      <section className="blonde-section" id="blonde">

        <div className="blonde-content">

          <span className="eyebrow">CURLY BLONDE</span>

          <h2>
            Seus cachos podem
            <br />
            <em>brilhar ainda mais.</em>
          </h2>

          <p>
            Uma linha especial para cabelos cacheados com
            luzes ou coloração, criada para cuidar dos fios
            sem deixar de lado a sua textura.
          </p>

          <button
            className="light-button"
            onClick={() => scrollToSection("blonde-products")}
          >
            Conheça CURLY Blonde
          </button>

        </div>

        <div className="blonde-visual">

          <div className="blonde-glow">
             <img
              src={heroBlond}
              alt="Cachos naturais CURLY"
            />
          </div>

          {/* <div className="blonde-product">
            CURLY
            <small>BLONDE</small>
          </div> */}

        </div>

      </section>

      {/* BLONDE PRODUCTS */}
      <section
        className="blonde-products"
        id="blonde-products"
      >

        <div className="section-header">

          <div>
            <span className="eyebrow">PARA FIOS ILUMINADOS</span>

            <h2>
              Cuidado que
              <br />
              <em>valoriza o brilho.</em>
            </h2>
          </div>

          <p>
            Uma rotina especial para manter seus fios
            hidratados, protegidos e luminosos.
          </p>

        </div>

        <div className="blonde-grid">
          {blondeProducts.map((product) => (
            <article className="blonde-card" key={product.name}>
              <div className="blonde-card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="blonde-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="ritual-section" id="ritual">

        <div className="ritual-heading">

          <span className="eyebrow">COMO FUNCIONA</span>

          <h2>
            Um ritual.
            <br />
            <em>Quatro momentos.</em>
          </h2>

        </div>

        <div className="steps">

          <div className="step">
            <span>01</span>
            <div>
              <h3>Clean</h3>
              <p>Comece limpando suavemente os fios.</p>
            </div>
          </div>

          <div className="step">
            <span>02</span>
            <div>
              <h3>Care</h3>
              <p>Hidrate e cuide profundamente dos cachos.</p>
            </div>
          </div>

          <div className="step">
            <span>03</span>
            <div>
              <h3>Define</h3>
              <p>Finalize valorizando sua textura natural.</p>
            </div>
          </div>

          <div className="step">
            <span>04</span>
            <div>
              <h3>Shine</h3>
              <p>Finalize com brilho e movimento.</p>
            </div>
          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">

        <div className="testimonial-heading">

          <span className="eyebrow">ELAS AMAM CURLY</span>

          <h2>
            Cachos reais,
            <br />
            <em>experiências reais.</em>
          </h2>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >

              <div className="stars">
                ★★★★★
              </div>

              <p>
                “{testimonial.text}”
              </p>

              <strong>{testimonial.name}</strong>

            </article>
          ))}

        </div>

      </section>

      {/* PRICING */}
      <section className="pricing-section" id="kit">

        <div className="pricing-content">

          <span className="eyebrow">O RITUAL COMPLETO</span>

          <h2>
            Seu kit.
            <br />
            <em>Seu momento.</em>
          </h2>

          <p>
            Tudo o que você precisa para criar
            seu ritual CURLY completo.
          </p>

          <div className="price">
            <small>de R$ 312,50 por</small>
            R$ 239,90
          </div>

          <button
            className="primary-button"
            onClick={() => setShowModal(true)}
          >
            Quero meu CURLY Kit
          </button>

        </div>

        <div className="kit-list">

          <h3>O kit inclui:</h3>

          <p>✓ Curly Clean — Shampoo</p>
          <p>✓ Curly Mask — Máscara</p>
          <p>✓ Curly Leave-In — Creme</p>
          <p>✓ Curly Define — Gelatina</p>
          <p>✓ Curly Oil — Óleo</p>

        </div>

      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">

        <div className="faq-title">

          <span className="eyebrow">FAQ</span>

          <h2>
            Ficou com
            <br />
            <em>alguma dúvida?</em>
          </h2>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={faq.question}>

              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >

                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openFaq === index ? "−" : "+"}
                </span>

              </button>

              {openFaq === index && (
                <p>{faq.answer}</p>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="final-cta">

        <span className="eyebrow">CURLY</span>

        <h2>
          Ame a textura
          <br />
          <em>que é sua.</em>
        </h2>

        <p>
          Seu cabelo. Sua textura. Seu ritual.
        </p>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          Começar meu ritual
        </button>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          CURLY<span>.</span>
        </div>

        <p>
          Seu cabelo. Sua textura. Seu ritual.
        </p>

        <span>
          © 2026 CURLY
        </span>

      </footer>

      {/* MODAL */}
      {showModal && (

        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="modal-icon">
              🌀
            </div>

            <h2>
              Seu ritual está quase completo!
            </h2>

            <p>
              Essa compra é uma simulação.
              Obrigada por conhecer a CURLY!
            </p>

            <button
              className="primary-button"
              onClick={() => setShowModal(false)}
            >
              Finalizar pedido
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;