export const translations = {
  en: {
    nav: {
      about: "ABOUT",
      chapters: "CHAPTERS",
      contact: "CONTACT",
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
  },
  "pt-br": {
    nav: {
      about: "SOBRE",
      chapters: "CAPÍTULOS",
      contact: "CONTATO",
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
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
