// Espera o HTML todo carregar antes de rodar o nosso código JS
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MEUS DADOS (ARRAYS E OBJETOS) ---
  // Aqui eu guardei as informações dos meus projetos, cursos e habilidades para não ficar repetindo no HTML
  const projetosData = [
    {
      titulo: "Chrysalis E-commerce",
      descricao:
        "Chrysalis é uma loja de roupas virtual construída com HTML, CSS, Javascript, Tailwind CSS e PHP com MySQL. Projeto educativo com ênfase completa no full-stack.",
      imagem: "images/development/chrysalis.jpg",
      link: "https://github.com/LoadCG/Chrysalisphp2",
      categoria: "dev",
      tecnologias: ["HTML", "CSS", "JS", "PHP", "MySQL", "Tailwind"],
    },
    {
      titulo: "Le Parfum Page",
      descricao:
        "Uma landing page de perfumaria virtual chamada Le Parfum. Desenvolvida por mim e três colegas. Interface elegante, informativa e de fácil usabilidade.",
      imagem: "images/development/leParfum.png",
      link: "https://github.com/fakersl/LandingPageIngles",
      categoria: "dev",
      tecnologias: ["HTML", "CSS", "Javascript"],
    },
    {
      titulo: "Meu Portfólio em React",
      descricao:
        "Este website original foi desenvolvido por mim usando Vite, React, Typescript, Flowbite, e TailwindCSS.",
      imagem: "images/development/portfolio.png",
      link: "https://github.com/LoadCG/my-portfolio",
      categoria: "dev",
      tecnologias: ["React", "TypeScript", "Tailwind", "Vite"],
    },
    {
      titulo: "Logo SAE",
      descricao:
        "Treinamentos SAE (Salvamento em Ambientes Extremos), focada em segurança e resgate. O projeto foi desenvolvido como designer free-lancer.",
      imagem: "images/design/logo_sae.png",
      link: "https://www.instagram.com/treinamentos.sae/",
      categoria: "design",
      tecnologias: ["Illustrator", "Photoshop", "Branding"],
    },
    {
      titulo: "Dra. Flávia Loureiro",
      descricao:
        "Projeto de rebranding e identidade visual para clínica de estética. Renovei o design, criando uma comunicação muito mais sofisticada.",
      imagem: "images/design/draflavia.png",
      link: "https://www.behance.net/gallery/236818369/Social-Media-Esttica-Cirurgia-Plastica",
      categoria: "design",
      tecnologias: ["Photoshop", "Social Media", "Figma"],
    },
    {
      titulo: "O Pampeiro",
      descricao:
        "Projeto desenvolvido na para a churrascaria e pizzaria O Pampeiro. Realizei a reformulação visual das redes sociais e nova identidade autêntica.",
      imagem: "images/design/opampeiro.png",
      link: "https://www.behance.net/gallery/234000133/Restaurante-O-Pampeiro",
      categoria: "design",
      tecnologias: ["Illustrator", "Photoshop", "Identidade Visual"],
    },
    {
      titulo: "Acolher é um ato de coragem",
      descricao:
        "Campanha de Setembro Amarelo desenvolvida para a Botica, rede de farmácias alopáticas do Piauí. Criei peças de endomarketing para conscientização e acolhimento sobre saúde mental.",
      imagem: "images/design/setembroamarelobotica.png",
      link: "https://www.behance.net/gallery/237477329/SETEMBRO-AMARELO-ENDOMARKETING",
      categoria: "design",
      tecnologias: ["Photoshop", "Endomarketing", "Campanha"],
    },
  ];

  const cursosData = [
    {
      nome: "Python Essentials",
      instituicao: "Cisco",
      ano: "Jul 2025 • 30h",
      icone: "ph-code",
    },
    {
      nome: "Linux Unhatched",
      instituicao: "Cisco",
      ano: "Jul 2025 • 8h",
      icone: "ph-terminal-window",
    },
    {
      nome: "Design Gráfico e Photoshop Avançado",
      instituicao: "Independente",
      ano: "Jan 2025 • 50h",
      icone: "ph-paint-brush",
    },
    {
      nome: "Front-End Completo 2.0",
      instituicao: "Danki Code",
      ano: "Dez 2024 • 9h",
      icone: "ph-browsers",
    },
    {
      nome: "Web Design Express",
      instituicao: "Independente",
      ano: "Jun 2023 • 13h",
      icone: "ph-layout",
    },
    {
      nome: "Inglês Intermediário",
      instituicao: "Nesper",
      ano: "Dez 2020 • 174h",
      icone: "ph-translate",
    },
  ];

  const competenciasData = {
    hardSkills: [
      "Java (POO)",
      "PHP",
      "SQL",
      "HTML5, CSS3 e JavaScript",
      "React",
      "TailwindCSS e Bootstrap",
      "Adobe Photoshop e Illustrator",
      "Motion Graphics (After Effects)",
      "Edição de vídeo (DaVinci Resolve, CapCut)",
      "Scrum e Kanban",
    ],
    softSkills: [
      "Facilidade de aprendizado e adaptação",
      "Boa comunicação",
      "Trabalho em equipe",
      "Organização",
      "Comprometimento",
      "Pensamento analítico",
      "Resolução de problemas",
      "Proatividade",
      "Responsabilidade",
    ],
  };

  // --- 2. FUNÇÕES PARA CRIAR AS SEÇÕES NA TELA ---

  // Função com If/Else para dar "Bom dia", "Boa tarde" ou "Boa noite" dependendo da hora atual
  function definirSaudacao() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) return; // Se não achar o ID, não faz nada para não dar erro

    const horaAtual = new Date().getHours(); // Pega a hora do meu computador/celular
    let saudacaoText = "";

    // Estrutura de Decisão (If/Else) exigida no trabalho
    if (horaAtual >= 5 && horaAtual < 12) {
      saudacaoText = "Bom dia,";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacaoText = "Boa tarde,";
    } else {
      saudacaoText = "Boa noite,";
    }

    greetingElement.textContent = saudacaoText;
  }

  // Função para pegar o Ano Atual e colocar lá no rodapé (Footer) automaticamente
  function definirAnoAtual() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Aqui eu guardo quantos projetos estão aparecendo na tela pro botão "Ver Mais" saber quando agir
  let projetosDevAtuais = 3;
  let projetosDesignAtuais = 3;
  let categoriaAtiva = "dev";

  // Função que usa o For para ler a lista de projetos e desenhar no site
  function renderizarProjetos() {
    const caixa = document.getElementById("projects-container");
    if (!caixa) return;

    caixa.innerHTML = "";

    // Contadores para sabermos em qual número o projeto de cada categoria atual está
    let contagemProgramacao = 0;
    let contagemDesign = 0;

    // Estrutura de Repetição (Loop FOR) passando por cada projeto lá na lista (Array) de cima
    for (let i = 0; i < projetosData.length; i++) {
      const projeto = projetosData[i];

      let htmlDoBotao = "";
      let classesDeInicio = "";
      let classeEscondida = "";

      // Verifica qual a categoria do projeto e soma no contador
      if (projeto.categoria === "dev") {
        contagemProgramacao++;
        // Se já tiver passado do limite (3), ele começa escondido na tela
        if (contagemProgramacao > projetosDevAtuais)
          classeEscondida = "hidden-by-limit";
      } else {
        contagemDesign++;
        if (contagemDesign > projetosDesignAtuais)
          classeEscondida = "hidden-by-limit";
      }

      // Outro IF/ELSE (Decisão Secundaria) para ver se o projeto é de Programação ou de Design
      // Faço isso para poder esconder ou mostrar quando clico nos botões de filtro lá na tela
      if (projeto.categoria === "dev") {
        // Se a gente tá na aba de Programação e o projeto não passou do limite de 3, mostra ele na tela
        const estaVisivel =
          categoriaAtiva === "dev" && classeEscondida !== "hidden-by-limit";
        classesDeInicio = `dev-project ${estaVisivel ? "flex" : "hidden"} ${classeEscondida}`;
        htmlDoBotao = `
            <a href="${projeto.link}" target="_blank" class="inline-flex items-center text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300">
                Ver Repositório <i class="ph ph-arrow-right ml-2 text-lg group-hover:translate-x-1 transition-transform"></i>
            </a>`;
      } else {
        const estaVisivel =
          categoriaAtiva === "design" && classeEscondida !== "hidden-by-limit";
        classesDeInicio = `design-project ${estaVisivel ? "flex" : "hidden"} ${classeEscondida}`;
        htmlDoBotao = `
            <a href="${projeto.link}" target="_blank" class="inline-flex items-center text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300">
                Ver Projeto <i class="ph ph-arrow-right ml-2 text-lg group-hover:translate-x-1 transition-transform"></i>
            </a>`;
      }

      // Mais um FORzinho só pra listar as "etiquetas" (tags) de tecnologia que eu usei em cada projeto
      let htmlDasEtiquetas = `<div class="mt-4 flex flex-wrap gap-2">`;
      if (projeto.tecnologias) {
        for (let j = 0; j < projeto.tecnologias.length; j++) {
          htmlDasEtiquetas += `<span class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20 w-fit">${projeto.tecnologias[j]}</span>`;
        }
      }
      htmlDasEtiquetas += `</div>`;

      const htmlDoCartao = `
            <div class="project-card ${classesDeInicio} group relative h-full flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-glassBorder transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <img src="${projeto.imagem}" alt="${projeto.titulo}" class="mx-auto h-48 w-full rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="flex flex-1 flex-col justify-between p-6 z-10 sm:bg-transparent">
                <div class="flex flex-col flex-1">
                  <h5 class="mb-3 text-xl font-bold text-white tracking-tight">${projeto.titulo}</h5>
                  <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4 flex-1">${projeto.descricao}</p>
                  ${htmlDasEtiquetas}
                </div>
                <div class="mt-6 pt-4 border-t border-glassBorder">
                  ${htmlDoBotao}
                </div>
              </div>
            </div>`;

      caixa.innerHTML += htmlDoCartao; // Acumulando HTML
    }

    // Atualiza os botões de separar projetos entre "Desenvolvimento" e "Design"
    configurarAbasProjetos();
    atualizarBotaoLoadMore();
  }

  // Função que esconde o botão "Ver Mais" se a gente já estiver mostrando todos os projetos daquela aba
  function atualizarBotaoLoadMore() {
    const botaoDeCarga = document.getElementById("load-more-btn");
    if (!botaoDeCarga) return;

    let totalDeProjetos = projetosData.filter(
      (p) => p.categoria === categoriaAtiva,
    ).length;
    let projetosMostrados =
      categoriaAtiva === "dev" ? projetosDevAtuais : projetosDesignAtuais;

    if (projetosMostrados >= totalDeProjetos) {
      botaoDeCarga.classList.add("hidden");
      botaoDeCarga.classList.remove("inline-flex");
    } else {
      botaoDeCarga.classList.remove("hidden");
      botaoDeCarga.classList.add("inline-flex");
    }
  }

  // Ação de clique: Se a pessoa clicar em "Carregar Mais", eu libero mais 3 espaços na tela e mando desenhar de novo
  const botaoCargaGlobal = document.getElementById("load-more-btn");
  if (botaoCargaGlobal) {
    botaoCargaGlobal.addEventListener("click", () => {
      if (categoriaAtiva === "dev") {
        projetosDevAtuais += 3;
      } else {
        projetosDesignAtuais += 3;
      }
      renderizarProjetos(); // Redesenha a tela com o novo limite
    });
  }

  // Função que faz a mesma coisa do For de projetos, mas agora com os cursos que eu fiz
  function renderizarCursos() {
    const caixaDeCursos = document.getElementById("courses-container");
    if (!caixaDeCursos) return;

    let htmlApoio = "";

    for (let i = 0; i < cursosData.length; i++) {
      const curso = cursosData[i];
      htmlApoio += `
            <div class="group flex items-start rounded-2xl bg-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(16,185,129,0.15)] border border-glassBorder hover:border-emerald-500/40 relative overflow-hidden">
                <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] relative z-10">
                    <i class="ph ${curso.icone} text-3xl"></i>
                </div>
                <div class="ml-5 flex flex-col justify-center h-full relative z-10">
                    <h3 class="text-xl font-bold text-white tracking-tight transition-colors duration-300">${curso.nome}</h3>
                    <div class="mt-3 flex items-center justify-between">
                        <span class="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-semibold text-emerald-400 border border-emerald-400/20 uppercase tracking-wider">${curso.instituicao}</span>
                        <span class="text-gray-400 text-sm flex items-center font-medium"><i class="ph ph-clock mr-1"></i> ${curso.ano}</span>
                    </div>
                </div>
            </div>`;
    }

    caixaDeCursos.innerHTML = htmlApoio;
  }

  // Função pra criar os quadradinhos elegantes com as minhas Hard e Soft Skills
  function renderizarCompetencias() {
    const caixaDeHabilidades = document.getElementById("skills-container");
    if (!caixaDeHabilidades) return;

    let htmlApoioHard = `
        <div class="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-glassBorder hover:border-white/20 transition-all duration-700 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <div class="absolute -right-4 -bottom-4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px] transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
            <div class="relative z-10">
                <div class="flex items-center mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mr-4 shadow-lg">
                        <i class="ph ph-desktop text-2xl text-emerald-400"></i>
                    </div>
                    <h3 class="text-3xl font-bold text-white tracking-tight">Hard Skills</h3>
                </div>
                <div class="flex flex-wrap gap-3">`;

    for (let habilidadeTecnica of competenciasData.hardSkills) {
      htmlApoioHard += `<span class="cursor-default rounded-xl bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-semibold text-gray-200 border border-white/10 hover:-translate-y-1 hover:bg-white/10 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_4px_20px_rgba(16,185,129,0.2)] transition-all duration-300">${habilidadeTecnica}</span>`;
    }
    htmlApoioHard += `</div></div></div>`;

    let htmlApoioSoft = `
        <div class="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-glassBorder hover:border-white/20 transition-all duration-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            <div class="absolute -right-4 -bottom-4 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
            <div class="relative z-10">
                <div class="flex items-center mb-8">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mr-4 shadow-lg">
                        <i class="ph ph-brain text-2xl text-blue-400"></i>
                    </div>
                    <h3 class="text-3xl font-bold text-white tracking-tight">Soft Skills</h3>
                </div>
                <div class="flex flex-wrap gap-3">`;

    for (let habilidadeSocial of competenciasData.softSkills) {
      htmlApoioSoft += `<span class="cursor-default rounded-xl bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-semibold text-gray-200 border border-white/10 hover:-translate-y-1 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-300 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] transition-all duration-300">${habilidadeSocial}</span>`;
    }
    htmlApoioSoft += `</div></div></div>`;

    caixaDeHabilidades.innerHTML = htmlApoioHard + htmlApoioSoft;
  }

  // --- 3. INICIALIZAÇÃO MAIN ---
  // A gente chama todas as funções desenhadoras aqui pra elas rodarem de fato
  definirSaudacao();
  definirAnoAtual();
  renderizarProjetos();
  renderizarCursos();
  renderizarCompetencias();

  // --- 4. FUNCIONALIDADES EXTRAS DE TELA ---

  // Códigos pra fazer o botão do Menu de Celular (Hambúrguer) abrir e fechar a lista de links
  const botaoMenuMobile = document.getElementById("mobile-menu-btn");
  const menuMobile = document.getElementById("mobile-menu");
  const iconeAberto = document.getElementById("menu-icon-open");
  const iconeFechado = document.getElementById("menu-icon-close");
  const linksMobile = document.querySelectorAll(".mobile-link");

  // Função que verifica se o menu do celular tá aberto e inverte o estado dele (abre se tiver fechado, fecha se tiver aberto)
  function alternarMenu() {
    if (!botaoMenuMobile) return;
    const estaExpandido =
      botaoMenuMobile.getAttribute("aria-expanded") === "true";
    botaoMenuMobile.setAttribute("aria-expanded", !estaExpandido);

    menuMobile.classList.toggle("hidden");
    iconeAberto.classList.toggle("hidden");
    iconeFechado.classList.toggle("hidden");
  }

  if (botaoMenuMobile) botaoMenuMobile.addEventListener("click", alternarMenu);

  linksMobile.forEach((link) => {
    link.addEventListener("click", () => {
      if (!menuMobile.classList.contains("hidden")) {
        alternarMenu();
      }
    });
  });

  // Filtro que troca os Projetos de "Desenvolvedor" para "Design" quando a pessoa clica
  function configurarAbasProjetos() {
    const abaProgramacao = document.getElementById("tab-dev");
    const abaDesign = document.getElementById("tab-design");

    const projetosProgramacao = document.querySelectorAll(".dev-project");
    const projetosDesign = document.querySelectorAll(".design-project");

    if (abaProgramacao && abaDesign) {
      // Limpando os eventos pra evitar que o site fique travando quando clica muito nas abas
      const selecionarAbaProgramacao = () => {
        categoriaAtiva = "dev";
        const botaoProgramacao = document.getElementById("tab-dev");
        const botaoDesign = document.getElementById("tab-design");

        if (botaoProgramacao)
          botaoProgramacao.className =
            "flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl bg-emerald-600 px-6 py-4 sm:py-3 text-white shadow-lg shadow-emerald-500/30 transition-all";
        if (botaoDesign)
          botaoDesign.className =
            "flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-4 sm:py-3 text-gray-400 transition-all hover:sm:ml-2 hover:scale-[1.02] sm:hover:scale-105 hover:bg-white/10 hover:text-white backdrop-blur-md";

        projetosProgramacao.forEach((projeto) => {
          if (!projeto.classList.contains("hidden-by-limit")) {
            projeto.classList.remove("hidden");
            projeto.classList.add("flex");
          }
        });
        projetosDesign.forEach((projeto) => {
          projeto.classList.remove("flex");
          projeto.classList.add("hidden");
        });
        atualizarBotaoLoadMore();
      };

      const selecionarAbaDesign = () => {
        categoriaAtiva = "design";
        const botaoProgramacao = document.getElementById("tab-dev");
        const botaoDesign = document.getElementById("tab-design");

        if (botaoDesign)
          botaoDesign.className =
            "flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-6 py-4 sm:py-3 text-white shadow-lg shadow-blue-500/30 transition-all";
        if (botaoProgramacao)
          botaoProgramacao.className =
            "flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl bg-white/5 border border-white/10 px-6 py-4 sm:py-3 text-gray-400 transition-all hover:sm:mr-2 hover:scale-[1.02] sm:hover:scale-105 hover:bg-white/10 hover:text-white backdrop-blur-md";

        projetosDesign.forEach((projeto) => {
          if (!projeto.classList.contains("hidden-by-limit")) {
            projeto.classList.remove("hidden");
            projeto.classList.add("flex");
          }
        });
        projetosProgramacao.forEach((projeto) => {
          projeto.classList.remove("flex");
          projeto.classList.add("hidden");
        });
        atualizarBotaoLoadMore();
      };

      // Truque de Javascript: troco os botões por clones deles mesmos pra limpar "vícios" de cliques anteriores
      abaProgramacao.replaceWith(abaProgramacao.cloneNode(true));
      abaDesign.replaceWith(abaDesign.cloneNode(true));

      document
        .getElementById("tab-dev")
        .addEventListener("click", selecionarAbaProgramacao);
      document
        .getElementById("tab-design")
        .addEventListener("click", selecionarAbaDesign);
    }
  }

  // Aqui eu uso um recurso chamado IntersectionObserver pra fazer os textos aparecerem de baixo pra cima suavemente
  const observadorAparicao = new IntersectionObserver(
    (elementosEntrando, observador) => {
      elementosEntrando.forEach((elemento) => {
        // Quando a seção entra na tela do usuário, eu coloco a classe 'visible' do CSS nela
        if (elemento.isIntersecting) {
          elemento.target.classList.add("visible");
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.1 },
  );

  document
    .querySelectorAll(".fade-in")
    .forEach((elementoDiv) => observadorAparicao.observe(elementoDiv));
});

// ==========================================
// OUTRAS FUNÇÕES DA NAVEGAÇÃO DA PÁGINA
// ==========================================

// Função simples pra fechar aquele menu do celular quando alguém clicar num link
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menuPequeno = document.getElementById("mobile-menu");
    const iconeDoMenuAberto = document.getElementById("menu-icon-open");
    const iconeDoMenuFechado = document.getElementById("menu-icon-close");

    if (menuPequeno && !menuPequeno.classList.contains("hidden")) {
      menuPequeno.classList.add("hidden");
      iconeDoMenuAberto.classList.remove("hidden");
      iconeDoMenuFechado.classList.add("hidden");
    }
  });
});

// Lógica pra fazer o botão de "Voltar ao Topo" aparecer e funcionar
const botaoVoltarAoTopo = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  // Se ele rodar 500 pixels pra baixo, o botão aparece
  if (window.scrollY > 500) {
    botaoVoltarAoTopo.classList.remove(
      "opacity-0",
      "translate-y-20",
      "pointer-events-none",
    );
    botaoVoltarAoTopo.classList.add(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto",
    );
  } else {
    botaoVoltarAoTopo.classList.add(
      "opacity-0",
      "translate-y-20",
      "pointer-events-none",
    );
    botaoVoltarAoTopo.classList.remove(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto",
    );
  }
});

// Quando a tela carregar, se ele clicar na setinha, a tela sobe deslizando ('smooth')
botaoVoltarAoTopo?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Essa parte do código descobre em qual parte da página nós estamos (scrollando)
// Pra poder deixar o link do menu principal verdinho (ativo)
const secoesDaPagina = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let rolagemY = window.scrollY;

  secoesDaPagina.forEach((secaoAtual) => {
    const alturaDaSecao = secaoAtual.offsetHeight;
    const topoDaSecao = secaoAtual.offsetTop - 100;
    const idDaSecao = secaoAtual.getAttribute("id");

    // Procura o link de verdade lá no HTML usando o caminho (href) igual da Seção
    const linkComputador = document.querySelector(
      `.hidden.md\\:block a[href*=${idDaSecao}]`,
    );
    const linkCelular = document.querySelector(
      `.space-y-1 a[href*=${idDaSecao}]`,
    );

    if (rolagemY > topoDaSecao && rolagemY <= topoDaSecao + alturaDaSecao) {
      if (linkComputador) {
        linkComputador.classList.remove("text-gray-400", "hover:text-blue-400");
        linkComputador.classList.add("text-emerald-400", "font-bold");
      }
      if (linkCelular) {
        linkCelular.classList.add("text-emerald-400", "bg-white/5");
        linkCelular.classList.remove("text-gray-300");
      }
    } else {
      if (linkComputador) {
        linkComputador.classList.remove("text-emerald-400", "font-bold");
        linkComputador.classList.add("text-gray-400", "hover:text-blue-400");
      }
      if (linkCelular) {
        linkCelular.classList.remove("text-emerald-400", "bg-white/5");
        linkCelular.classList.add("text-gray-300");
      }
    }
  });
});
