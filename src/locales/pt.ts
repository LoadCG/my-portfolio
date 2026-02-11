export default {
  hero: {
    title: "Olá, eu sou",
    subtitle:
      "Atuo como designer gráfico em uma agência e curso Análise e Desenvolvimento de Sistemas. Com base técnica em informática e perfil criativo, uno lógica e estética para desenvolver soluções visuais e funcionais que geram impacto real e fortalecem marcas no ambiente digital.",
    downloadCv: "Baixar CV",
    contactMe: "Entrar em Contato",
    scrollText: "Saiba mais sobre mim",
  },
  about: {
    titlePart1: "Saiba mais",
    titlePart2: "Sobre Mim",
    content: `Sou <strong>designer gráfico profissional</strong> e <strong>desenvolvedor front-end em formação</strong>. Durante o dia, atuo em uma agência de design, onde crio campanhas publicitárias, materiais impressos, peças para redes sociais e textos criativos — vivência que me ensinou a <strong>pensar estrategicamente</strong> em cada pixel e palavra. À noite, estudo Análise e Desenvolvimento de Sistemas na Fatec São José dos Campos - Prof. Jessen Vidal, e sigo me aprofundando de forma autodidata em <strong>React e Tailwind CSS</strong> para transformar ideias criativas em interfaces funcionais.<br/><br/>
              Minha jornada começou em <strong>2017 com o Photoshop</strong>, mas ganhou base sólida no curso técnico de Informática, onde aprendi desde <strong>POO com Java</strong> até desenvolvimento web com <strong>PHP, HTML, CSS e JavaScript</strong>. Essa formação dupla — prática em design e técnica em programação — me permite enxergar cada projeto digital sob dois ângulos: <strong>a experiência do usuário</strong> e <strong>a robustez do código</strong>.<br/><br/>
              Meu objetivo é claro: ser um <strong>profissional híbrido</strong>, capaz de liderar projetos que exigem tanto <strong>design impactante</strong> quanto <strong>desenvolvimento preciso</strong>. Seja compondo um banner que converte ou componentizando uma interface em React, busco sempre o equilíbrio entre <strong>forma e função</strong>.`,
    timeline: {
      technical: {
        time: "2022 - 2024",
        title: "Técnico em Informática",
        body: "Formação sólida em desenvolvimento web e programação orientada a objetos. Estudei HTML, CSS, JavaScript, PHP/MySQL, Java e prototipação no Figma, desenvolvendo sistemas completos como o projeto Chrysalis E-commerce, que uniu lógica, UI e experiência do usuário.",
      },
      design: {
        time: "2017 - Atualmente",
        title: "Design Gráfico na Prática",
        body: "Iniciei com Photoshop em 2017 e, desde então, criei peças gráficas para mídias sociais, artistas e campanhas. Hoje atuo como designer gráfico em uma agência, desenvolvendo materiais para o ambiente digital e impresso com foco estratégico e criativo.",
      },
      current: {
        time: "Atualmente",
        title: "Desenvolvimento Contínuo",
        body: "Curso Análise e Desenvolvimento de Sistemas na Fatec São José dos Campos - Prof. Jessen Vidal e estudo React e Tailwind CSS por conta própria. Busco unir meus conhecimentos técnicos e criativos para entregar interfaces modernas, responsivas e com propósito.",
      },
    },
  },
  projects: {
    titleWhite: "Meus",
    title: "Projetos",
    subtitle:
      "Navegue por trabalhos selecionados que representam minha dupla expertise em construir experiências digitais e criar narrativas visuais impactantes.",
    development: "Desenvolvimento",
    design: "Design Gráfico",
    viewProject: "Ver Projeto",
    viewMore: "Ver mais",
    viewLess: "Ver menos",
    designAlertTitle: "Projeto de Design",
    designAlert:
      "Este projeto de design está disponível exclusivamente no Instagram. Gostaria de visualizá-lo?",
    modal: {
      openInstagram: "Ver no Instagram",
      cancel: "Cancelar",
    },
    projectsList: {
      chrysalis: {
        title: "Chrysalis E-commerce",
        description:
          "Chrysalis é uma loja de roupas virtual construída com HTML, CSS, Javascript, Tailwind CSS e PHP com MySQL. Projeto desenvolvido para fins educacionais durante minha formação técnica de informática.",
      },
      leParfum: {
        title: "Le Parfum Page",
        description:
          "Uma landing page de perfumaria virtual chamada Le Parfum. Desenvolvida por mim e três colegas para um projeto de Inglês durante o curso técnico. Elegante, informativa e de fácil usabilidade.",
      },
      draflavia: {
        title: "Dra. Flávia Loureiro",
        description:
          "Projeto de rebranding e identidade visual desenvolvido pela Agência Wiks para a cirurgiã plástica Dra. Flávia Loureiro, da Clínica Rejuvenate (RJ). Renovei o design das redes sociais, criando uma comunicação mais sofisticada, elegante e alinhada ao público da marca.",
      },
      portfolio: {
        title: "Meu Portfolio",
        description:
          "Este website! Foi desenvolvido por mim usando Vite, React, Typescript, Flowbite, e TailwindCSS. É um projeto pessoal para exibir meu portfólio. Este está em constante evolução.",
      },
      sae: {
        title: "Logo SAE",
        description:
          "Logo para a empresa Treinamentos SAE(Salvamento em Ambientes Extremos), empresa real focada em treinamentos de segurança e resgate. O projeto foi desenvolvido por mim como designer gráfico freelancer.",
      },
      opampeiro: {
        title: "O Pampeiro",
        description:
          "Projeto desenvolvido na Agência Wiks para o restaurante O Pampeiro, tradicional churrascaria e pizzaria localizada em Lorena - SP. Realizei a reformulação visual das redes sociais, criando uma identidade mais atraente e alinhada ao conceito de rodízio e experiência gastronômica da marca.",
      },
      setembroamarelobotica: {
        title: "Acolher é um ato de coragem",
        description:
          "Campanha de Setembro Amarelo desenvolvida para a Botica, rede de farmácias alopáticas do Piauí. Sob o título 'Acolher é um ato de coragem', criei peças de endomarketing para conscientização e acolhimento sobre saúde mental.",
      },
    },
  },
  pricing: {
    titleWhite: "Opções de",
    title: "Planos",
    subtitle:
      "Escolha o plano que melhor atende suas necessidades de desenvolvimento full-stack e design gráfico",
    plans: {
      pricePerProject: "projeto",
      pricePerPackage: "pacote",
      ecommerce: {
        title: "E-commerce",
        description: "Solução completa para loja virtual",
        price: "R$3.399+",
        features: {
          catalog: "Catálogo de produtos completo",
          cart: "Carrinho de compras funcional",
          payment: "Com métodos de pagamento",
          slots: "Apenas 2 vagas/mês",
        },
        tooltips: {
          catalog: "Listagem de produtos com filtros e categorias",
          payment: "Stripe, PayPal ou métodos de pagamento locais",
        },
      },
      landing: {
        title: "Landing Page",
        description: "Website profissional de página única",
        price: "R$1.099",
        features: {
          responsive: "Design moderno e responsivo",
          sections: "5 seções bem estruturadas",
          contact: "Formulário de contato integrado",
          slots: "Apenas 5 vagas/mês",
        },
      },
      brand: {
        title: "Identidade Visual",
        description: "Pacote completo de identidade visual",
        price: "R$849",
        features: {
          logo: "Logo principal + variações",
          colors: "Paleta de cores profissional",
          guide: "Guia básico de aplicação",
          slots: "Apenas 3 vagas/mês",
        },
      },
    },
    button: "Escolher Plano",
    popular: "Mais Popular",
  },
  contact: {
    titleWhite: "Vamos Trabalhar",
    title: "Juntos",
    subtitle:
      "Entre em contato para discutir seu projeto ou apenas para dizer olá. Estou disponível para oportunidades freelancer e colaborações.",
    options: {
      whatsapp: {
        title: "WhatsApp",
        description: "Discussões de Projetos",
        action: "Iniciar Chat →",
      },
      instagram: {
        title: "Instagram",
        description: "Solicitações de Design",
        action: "Enviar DM →",
      },
      linkedin: {
        title: "LinkedIn",
        description: "Rede Profissional",
        action: "Conectar →",
      },
      location: {
        title: "Localização",
        text: "Caçapava-SP, Brasil",
        secondaryText: "(Disponível para trabalho remoto)",
        email: "Prefere email? Me envie uma mensagem direta em",
      },
    },
  },
  footer: {
    copyright: "© 2025 Cauan Gabriel. Todos os direitos reservados.",
    social: {
      instagram: "Instagram",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    mainNav: "Navegação principal",
  },
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    pricing: "Planos",
    contact: "Contato",
  },
  documentTitle: "Cauan G. - Dev. Fullstack & Designer",
};
