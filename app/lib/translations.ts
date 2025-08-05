export const translations = {
  en: {
    nav: {
      about: "ABOUT",
      chapters: "CHAPTERS",
      contact: "CONTACT",
      download: "DOWNLOAD",
      letsConnect: "Let's Connect",
    },
    hero: {
      greeting: "Welcome to",
      name: "DIM",
      subtitle: "Digital Idiot's Manual",
    },
    about: {
      title: "Why this book exists",
      description:
        "There's not much to say about this book, it is just a collection of my observations about the use of AI by the people around me, and I hope you enjoy it.",
      scrollingText: "ABOUT",
    },
    chapters: {
      title: "CHAPTERS",
      viewAll: "VIEW ALL",
      seeMore: "See More",
      view: "View",
      chapters: {
        chapter_1: {
          title: "Chapter 1",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_2: {
          title: "Chapter 2",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_3: {
          title: "Chapter 3",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_4: {
          title: "Chapter 4",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      },
    },
    contact_download: {
      title: "CONTACT & DOWNLOAD",
      contact: "Contact",
      download: "Download",
    }
  },
  "pt-br": {
    nav: {
      about: "SOBRE",
      chapters: "CAPÍTULOS",
      contact: "CONTATO",
      download: "BAIXAR",
      letsConnect: "Vamos Conversar",
    },
    hero: {
      greeting: "Bem-vindo ao",
      name: "MID",
      subtitle: "Manual do Idiota Digital",
    },
    about: {
      title: "Por que este livro existe",
      description:
        "Não há muito o que dizer sobre este livro, é apenas uma coleção das minhas observações sobre o uso de IA pelas pessoas ao meu redor, e espero que você goste.",
      scrollingText: "SOBRE",
    },
    chapters: {
      title: "CAPÍTULOS",
      viewAll: "VER TODOS",
      seeMore: "Ver mais",
      view: "Ver",
      chapters: {
        chapter_1: {
          title: "Capítulo 1",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_2: {
          title: "Capítulo 2",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_3: {
          title: "Capítulo 3",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        chapter_4: {
          title: "Capítulo 4",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      },
    },
    contact_download: {
      title: "CONTATO & DOWNLOAD",
      contact: "Contato",
      download: "Baixar",
    }
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
