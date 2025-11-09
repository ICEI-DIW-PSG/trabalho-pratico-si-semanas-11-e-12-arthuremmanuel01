const ytThumbHD = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytThumbFallback = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const ytThumb = (id) => ytThumbHD(id);

const aulas = [
  //aula 1
  {
    id: 1,
    videoId: "uQ_YDv9Zk30",
    embedSrc:
      "https://www.youtube.com/embed/uQ_YDv9Zk30?si=KCkpioJ4xH5uUzCQ",
    titulo: "Todos Suplementos Explicados em MENOS de 10 Minutos!",
    resumo: "Em menos de 10 minutos, entenda para que servem os suplementos mais populares (Whey, Creatina, Pré-Treino, Ômega-3) e por que BCAA e L-Carnitina são desperdício de dinheiro.",
    categoria: "Nutrição",
    autor: "Laércio Refundini",
    data: "2025-09-24",
    imagem: ytThumb("uQ_YDv9Zk30"),
    destaque: true,
  },
  //aula 2
  {
    id: 2,
    videoId: "dsNKszftySQ",
    embedSrc:
      "https://www.youtube.com/embed/dsNKszftySQ?si=o0DcMGJBFX6-ZBPk",
    titulo: "ABC é a Píor Divisão de Treino! (ENTENDA)",
    resumo: "O ABC pode estar arruinando seus ganhos: descubra por que e como mudar!",
    categoria: "Treino",
    autor: "Laércio Refundini",
    data: "2025-09-01",
    imagem: ytThumb("dsNKszftySQ"),
    destaque: false,
  },
  //aula 3
  {
    id: 3,
    videoId: "_T1lfZarhMs",
    embedSrc:
      "https://www.youtube.com/embed/_T1lfZarhMs?si=04fZDCF-AHeest_2",
    titulo: "Truques Simples para ganhar músculos",
    resumo: "Transforme seu treino AGORA: 10 truques simples para explodir o crescimento muscular.",
    categoria: "Treino",
    autor: "Laércio Refundini",
    data: "2025-06-23",
    imagem: ytThumb("_T1lfZarhMs"),
    destaque: true,
  },

  //aula 4
  {
    id: 4,
    videoId: "GuAJjmm7c5Q",
    embedSrc:
      "https://www.youtube.com/embed/GuAJjmm7c5Q?si=6PILQn6AeWR61fGi",
    titulo: "Periodização e Planejamento: Treinar de verdade pra evoluir!",
    resumo: "Saiba como organizar seu treino em ciclos para ter progressão constante e evitar a estagnação (efeito platô).",
    categoria: "Planejamento",
    autor: "Laércio Refundini",
    data: "2025-09-02",
    imagem: ytThumb("GuAJjmm7c5Q"),
    destaque: false,
  },

  //aula 5
  {
    id: 5,
    videoId: "T3M9rCkcBM8",
    embedSrc:
      "https://www.youtube.com/embed/T3M9rCkcBM8?si=EjN6cWUiJED6njGe",
    titulo: "APRENDA OS SEGREDOS DE UM PEITORAL GIGANTE - VÍDEO AULA",
    resumo: "Os segredos de treino (pré-exaustão, técnica e execução) usados por atletas para construir um peitoral grande, maximizando o pump e evitando lesões.",
    categoria: "Força",
    autor: "Renato Cariani",
    data: "2024-09-02",
    imagem: ytThumb("T3M9rCkcBM8"),
    destaque: false,
  },

  //aula 6
  {
    id: 6,
    videoId: "IP2QqzOqDEk",
    embedSrc:
      "https://www.youtube.com/embed/IP2QqzOqDEk?si=81ifjCX6ye_9bck7",
    titulo: "TÉCNICA PARA MELHORAR SEUS PONTOS FRACOS - SUBMÁXIMA",
    resumo: "Renato Cariani revela a técnica 'Submáxima Diária' para aumentar a angiogênese, gerar estímulo diário e corrigir um músculo deficiente (ponto fraco) no seu físico..",
    categoria: "Treino",
    autor: "Renato Cariani",
    data: "2020-09-07",
    imagem: ytThumb("IP2QqzOqDEk"),
    destaque: true,
  },

  //aula 7
  {
    id: 7,
    videoId: "o2rwxw12nag",
    embedSrc:
      "https://www.youtube.com/embed/o2rwxw12nag?si=W1vsGa5MOEp8is8c",
    titulo: "3 TÉCNICAS ESPECIAIS PARA REALIZAR UM AGACHAMENTO PERFEITO",
    resumo: "Aprenda 3 técnicas essenciais (básica, ênfase no quadríceps e Dead Stop) para um agachamento perfeito, seguro e sem dor, mesmo para quem tem lesões lombares ou no joelho.",
    categoria: "Treino",
    autor: "Renato Cariani",
    data: "2024-05-28",
    imagem: ytThumb("o2rwxw12nag"),
    destaque: false,
  },

  //aula 8
  {
    id: 8,
    videoId: "lcptIMTX444",
    embedSrc:
      "https://www.youtube.com/embed/lcptIMTX444?si=2JaNCMNKXLmAOVrQ",
    titulo: "ESSE É O SEGREDO PARA SECAR E CONSTRUIR MÚSCULOS AO MESMO TEMPO! – MASTER CLASS RENATO CARIANI",
    resumo: "Saiba como é possível secar (perder gordura) e crescer (ganhar massa muscular) simultaneamente, e quais os fatores (treino forte, proteína, carboidrato e gordura) essenciais para isso",
    categoria: "Nutrição",
    autor: "Renato Cariani",
    data: "2025-08-26",
    imagem: ytThumb("lcptIMTX444"),
    destaque: false,
  },

  //aula 9
  {
    id: 9,
    videoId: "kqAex5L6D-M",
    embedSrc:
      "https://www.youtube.com/embed/kqAex5L6D-M?si=GYyRSASrt6J1gted",
    titulo: "TOP ALIMENTOS QUE PESSOAS MAGRAS PRECISAM COMER",
    resumo: "Renato Cariani ensina a estratégia de alta densidade calórica e o 'Mega Shake' para pessoas magras ganharem massa muscular sem acumular gordura, focando em carboidratos e saúde intestinal.",
    categoria: "Nutrição",
    autor: "Renato Cariani",
    data: "2023-05-20",
    imagem: ytThumb("kqAex5L6D-M"),
    destaque: false,
  },

  //aula 10
  {
    id: 10,
    videoId: "wJBof_K85YY",
    embedSrc:
      "https://www.youtube.com/embed/wJBof_K85YY?si=D9s50JyuWnR7ApqC",
    titulo: "APRENDA A MONTAR SUA DIETA - PASSO A PASSO !",
    resumo: "Guia completo para montar uma dieta de 2.000 calorias com alimentos limpos, incluindo fracionamento das refeições e a regra 33% para distribuir proteínas, carboidratos e gorduras.",
    categoria: "Nutrição",
    autor: "Renato Cariani",
    data: "2021-05-07",
    imagem: ytThumb("wJBof_K85YY"),
    destaque: true,
  },

  //aula 11
  {
    id: 11,
    videoId: "tarBE0Jvuto",
    embedSrc:
      "https://www.youtube.com/embed/tarBE0Jvuto?si=h9MNDSOxZ1JeGePA",
    titulo: "TOP 4 ALIMENTOS QUE TE AJUDAM A EMAGRECER",
    resumo: "Renato Cariani lista 4 alimentos (feijão, frutas, iogurte e batata) cortados por muitos, mas que são aliados essenciais no emagrecimento e na definição, devido às suas fibras e baixo teor calórico.",
    categoria: "Nutrição",
    autor: "Renato Cariani",
    data: "2024-05-13",
    imagem: ytThumb("tarBE0Jvuto"),
    destaque: false,
  },

  //aula 12
  {
    id: 12,
    videoId: "4_HEU62cksU",
    embedSrc:
      "https://www.youtube.com/embed/4_HEU62cksU?si=4DpXJEMtqNyQNRSq",
    titulo: "10 dicas para melhorar seu treino",
    resumo: "Dez dicas essenciais para aumentar a qualidade do seu treino, focando no básico, na cadência excêntrica, na falha concêntrica e na progressão de dificuldade (não apenas de carga).",
    categoria: "Treino",
    autor: "Leandro Twin",
    data: "2021-07-25",
    imagem: ytThumb("4_HEU62cksU"),
    destaque: true,
  },

  //aula 13
  {
    id: 13,
    videoId: "Kv7K_ps3LH4",
    embedSrc:
      "https://www.youtube.com/embed/Kv7K_ps3LH4?si=CJF96YSn2oQ2s1g-",
    titulo: "Como treinar pesado de verdade *tem que saber*",
    resumo: "Descubra o que é treinar pesado de verdade, focando na intensidade (ir até a falha) e superando a resistência do corpo para gerar hipertrofia, desmistificando a ideia de que 'pesado' significa apenas muita carga.",
    categoria: "Treino",
    autor: "Leandro Twin",
    data: "2021-02-02",
    imagem: ytThumb("Kv7K_ps3LH4"),
    destaque: true,
  },

  //aula 14
  {
    "id": 14,
    "videoId": "OhdI7LdWatg",
    "embedSrc": "https://www.youtube.com/embed/OhdI7LdWatg?si=DUMMY_SI",
    "titulo": "PERIODIZAÇÃO DE TREINO PARA GANHO DE FORÇA E HIPERTROFIA #renatocariani #shorts",
    "resumo": "Periodização: a chave para ciclos de força e resistência.",
    "categoria": "Força",
    "autor": "Renato Cariani",
    "data": "2023-07-16",
    "imagem": "ytThumb(\"OhdI7LdWatg\")",
    "destaque": false
  },

  //aula 15
  {
    "id": 15,
    "videoId": "Vsj7PB05_68",
    "embedSrc": "https://www.youtube.com/embed/Vsj7PB05_68?si=DUMMY_SI",
    "titulo": "Como Potencializar os Ganhos de Hipertrofia no Treinamento de Força?",
    "resumo": "Estratégia para maximizar o ganho muscular no treino de força.",
    "categoria": "Força",
    "autor": "Viajando pela Fisiologia by Fabio Ceschini",
    "data": "2022-07-29",
    "imagem": "ytThumb(\"Vsj7PB05_68\")",
    "destaque": false
  },

  //aula 16
  {
    "id": 16,
    "videoId": "XqqZEeqlaLg",
    "embedSrc": "https://www.youtube.com/embed/XqqZEeqlaLg?si=DUMMY_SI",
    "titulo": "Laercio responde: treino de força provoca hipertrofia muscular?",
    "resumo": "Laércio Refundini responde se o treino de força e resistência também causa hipertrofia muscular.",
    "categoria": "Força",
    "autor": "Iridium Labs",
    "data": "2018-10-01",
    "imagem": "ytThumb(\"XqqZEeqlaLg\")",
    "destaque": false
  },

  //aula 17
  {
    "id": 17,
    "videoId": "ho79HogGHFg",
    "embedSrc": "https://www.youtube.com/embed/ho79HogGHFg?si=DUMMY_SI",
    "titulo": "Melhor divisão de treinamento para hipertrofia #shorts",
    "resumo": "Aprenda a montar a melhor divisão de treino focada em hipertrofia.",
    "categoria": "Força",
    "autor": "Leandro Twin",
    "data": "2023-06-02",
    "imagem": "ytThumb(\"ho79HogGHFg\")",
    "destaque": false
  },

  //aula 18
  {
    "id": 18,
    "videoId": "Y1I7hSffNdQ",
    "embedSrc": "https://www.youtube.com/embed/Y1I7hSffNdQ?si=DUMMY_SI",
    "titulo": "Entenda AGORA, o Que é Macrociclo, Mesociclo e Microciclo de Treino - Periodização #01",
    "resumo": "Aprenda os conceitos essenciais de periodização: Macrociclo, Mesociclo e Microciclo, e como organizar a distribuição das cargas de treinamento ao longo do tempo.",
    "categoria": "Planejamento",
    "autor": "Treino em FOCO",
    "data": "2021-10-17",
    "imagem": "ytThumb(\"Y1I7hSffNdQ\")",
    "destaque": false
  },

  //aula 19
  {
    "id": 19,
    "videoId": "dxfx0Yw3n7k",
    "embedSrc": "https://www.youtube.com/embed/dxfx0Yw3n7k?si=DUMMY_SI",
    "titulo": "Periodização de 4 Semanas: O Melhor Caminho para Hipertrofia e Emagrecimento na Musculação",
    "resumo": "Um modelo de periodização ondulatória (mixado) para 4 meses de treino, que cria variação de volume e intensidade para potencializar ganhos de hipertrofia e emagrecimento.",
    "categoria": "Planejamento",
    "autor": "Viajando pela Fisiologia by Fabio Ceschini",
    "data": "2023-07-19",
    "imagem": "ytThumb(\"dxfx0Yw3n7k\")",
    "destaque": false
  },

  //aula 20
  {
    "id": 20,
    "videoId": "Frr6cMXMcEY",
    "embedSrc": "https://www.youtube.com/embed/Frr6cMXMcEY?si=DUMMY_SI",
    "titulo": "Modelos de periodização de treino",
    "resumo": "Desmistifica os principais modelos de periodização (linear, ondulatória, em bloco, etc.), ajudando você a escolher a melhor estratégia para sua evolução a longo prazo.",
    "categoria": "Planejamento",
    "autor": "Leandro Twin",
    "data": "2019-09-22",
    "imagem": "ytThumb(\"Frr6cMXMcEY\")",
    "destaque": false
  },

  //aula 21
  {
    "id": 21,
    "videoId": "zZlU9VJPVfY",
    "embedSrc": "https://www.youtube.com/embed/zZlU9VJPVfY?si=DUMMY_SI",
    "titulo": "Principais parâmetros para uma boa montagem de treino",
    "resumo": "Os parâmetros cruciais que devem ser considerados ao montar qualquer ficha de treino, garantindo que o treinamento seja eficaz e personalizado para o seu objetivo.",
    "categoria": "Planejamento",
    "autor": "Leandro Twin",
    "data": "2024-03-07",
    "imagem": "ytThumb(\"zZlU9VJPVfY\")",
    "destaque": false
  },
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

// Carrossel
function renderCarousel() {
  const destaques = aulas.filter(a => a.destaque);
  const track = document.querySelector("#fwc-track");
  const dots = document.querySelector("#fwc-dots");
  if (!track || !dots) return;

  track.innerHTML = destaques.map((a, i) => `
    <li class="fwc-slide">
      <a href="detalhes.html?id=${a.id}" aria-label="${a.titulo}">
        <!-- ALTERAÇÃO: usa HD com fallback automático para hqdefault -->
        <img class="fwc-media" loading="${i === 0 ? 'eager' : 'lazy'}"
             src="${ytThumbHD(a.videoId)}"
             onerror="this.onerror=null;this.src='${ytThumbFallback(a.videoId)}'"
             alt="${a.titulo}">
      </a>
    </li>
  `).join("");

  track.style.width = `${destaques.length * 100}%`;
  track.style.setProperty('--slides', destaques.length);

  dots.innerHTML = destaques.map((_, i) => `
    <button class="fwc-dot" data-idx="${i}" aria-label="Ir para slide ${i + 1}"></button>
  `).join("");

  let idx = 0;
  const slides = Array.from(track.querySelectorAll(".fwc-slide"));
  const dotEls = Array.from(dots.querySelectorAll(".fwc-dot"));

  const setActive = (i) => {
    idx = (i + slides.length) % slides.length;
    const shift = -(idx * (100 / slides.length));
    track.style.transition = "";
    track.style.transform = `translateX(${shift}%)`;
    dotEls.forEach((d, k) => d.setAttribute("aria-current", k === idx ? "true" : "false"));
  };
  setActive(0);

  document.querySelector(".fwc-nav.prev").onclick = () => setActive(idx - 1);
  document.querySelector(".fwc-nav.next").onclick = () => setActive(idx + 1);

  dotEls.forEach(d => d.addEventListener("click", e => {
    setActive(parseInt(e.currentTarget.dataset.idx, 10));
  }));

  let timer = setInterval(() => setActive(idx + 1), 6000);
  const stop = () => clearInterval(timer);
  const start = () => timer = setInterval(() => setActive(idx + 1), 6000);
  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", start);
  dots.addEventListener("mouseenter", stop);
  dots.addEventListener("mouseleave", start);

  const viewport = document.querySelector(".fwc-viewport");
  if (viewport) {
    let startX = 0;
    let dx = 0;
    let active = false;

    const getX = (e) => ('touches' in e ? e.touches[0].clientX : e.clientX);

    const onStart = (e) => {
      active = true;
      startX = getX(e);
      dx = 0;
      stop();
      track.style.transition = "none";
    };

    const onMove = (e) => {
      if (!active) return;
      dx = getX(e) - startX;
      const base = -(idx * (100 / slides.length));
      track.style.transform = `translateX(calc(${base}% + ${dx}px))`;
    };

    const onEnd = () => {
      if (!active) return;
      track.style.transition = "";
      if (Math.abs(dx) > 50) setActive(idx + (dx < 0 ? 1 : -1));
      else setActive(idx);
      active = false;
      dx = 0;
      start();
    };

    viewport.addEventListener("touchstart", onStart, { passive: true });
    viewport.addEventListener("touchmove", onMove, { passive: true });
    viewport.addEventListener("touchend", onEnd);
    viewport.addEventListener("mousedown", onStart);
    viewport.addEventListener("mousemove", onMove);
    viewport.addEventListener("mouseup", onEnd);
    viewport.addEventListener("mouseleave", onEnd);
  }
}

function renderTiles() {
  const grid = document.querySelector("#tiles-grid");
  if (!grid) return;

  grid.innerHTML = aulas.map(a => `
    <li class="tile">
      <a href="detalhes.html?id=${a.id}" aria-label="${a.titulo}">
        <img class="tile-cover" loading="lazy"
             src="${ytThumbHD(a.videoId)}"
             onerror="this.onerror=null;this.src='${ytThumbFallback(a.videoId)}'"
             alt="${a.titulo}">
        <div class="tile-body">
          <p class="tile-title">${a.titulo}</p>
          <p class="tile-desc">${a.resumo}</p>
          <div class="tile-line"></div>
        </div>
      </a>
    </li>
  `).join("");
}

// Detalhes
function renderDetalhes() {
  const wrap = document.getElementById("detalhe");
  if (!wrap) return;
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
  const a = aulas.find(x => x.id === id);
  if (!a) {
    wrap.innerHTML = "<p>Item não encontrado.</p>";
    return;
  }

  const relacionados = aulas.filter(x => x.categoria === a.categoria && x.id !== id).slice(0, 12);

  wrap.innerHTML = `
    <header class="featured" style="text-align:center">
      <h1>${a.titulo}</h1>
      <p class="site-quote"><small>Categoria: ${a.categoria} • ${a.data} • ${a.autor}</small></p>
    </header>

    <div style="max-width:960px;margin:12px auto;aspect-ratio:16/9;background:#000;border-radius:12px;overflow:hidden">
      <iframe width="100%" height="100%" src="${a.embedSrc}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
    </div>

    <section class="card-body" style="max-width:960px;margin:0 auto;">
      <p>${a.resumo}</p>
      <ul>
        <li><strong>Categoria:</strong> ${a.categoria}</li>
        <li><strong>Autor:</strong> ${a.autor}</li>
        <li><strong>Data:</strong> ${a.data}</li>
        <li><strong>Vídeo:</strong> YouTube</li>
      </ul>
    </section>

    ${relacionados.length ? `
      <section class="related-section" aria-labelledby="ttl-rel">
        <h3 id="ttl-rel">Conteúdos relacionados</h3>
        <ul class="related-list">
          ${relacionados.map(r => `
            <li class="related-card">
              <a href="detalhes.html?id=${r.id}" aria-label="${r.titulo}">
                <img class="related-cover" loading="lazy"
                     src="${ytThumbHD(r.videoId)}"
                     onerror="this.onerror=null;this.src='${ytThumbFallback(r.videoId)}'"
                     alt="${r.titulo}">
                <p class="related-title">${r.titulo}</p>
              </a>
            </li>
          `).join("")}
        </ul>
      </section>
    ` : ``}

    <p class="see-all" style="margin-top:20px;">
      <a class="btn btn-outline" href="index.html">← Voltar para a Home</a>
    </p>
  `;
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("tiles-grid")) renderCarousel(), renderTiles();
  if (document.getElementById("detalhe")) renderDetalhes();
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  };
  const open = () => {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
  };

  toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  window.addEventListener('resize', () => { if (window.innerWidth > 860) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });
});
