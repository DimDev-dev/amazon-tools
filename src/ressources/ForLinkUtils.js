class LinkUtilsManager {
  constructor() {
    this.linkUtils = [
      {
        id: 1,
        categories: "Solving",
        links: [
          {
            id: 1,
            title: "je suis le lien 1 de solving",
            describe: "Lien 1 de solving",
            url: "#",
          },
          {
            id: 2,
            title: "je suis le lien 2 de solving",
            describe: "Lien 2 de solving",
            url: "#",
          },
        ],
      },
      {
        id: 2,
        categories: "Pack",
        links: [
          {
            id: 1,
            title: "je suis le lien 1 de pack",
            describe: "Lien 1 de pack",
            url: "#",
          },
          {
            id: 2,
            title: "je suis le lien 2 de pack",
            describe: "Lien 2 de pack",
            url: "#",
          },
        ],
      },
      {
        id: 3,
        categories: "Pick",
        links: [
          {
            id: 1,
            title: "je suis le lien 1 de pick",
            describe: "Lien 1 de pick",
            url: "#",
          },
          {
            id: 2,
            title: "je suis le lien 2 de pick",
            describe: "Lien 2 de pick",
            url: "#",
          },
        ],
      },
    ];
  }

  getLinkUtils() {
    return this.linkUtils;
  }
}

export default new LinkUtilsManager();
