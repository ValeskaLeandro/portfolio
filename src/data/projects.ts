import { SiStyledcomponents } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiCssmodules, SiTypescript, 
        SiReact, SiJavascript } from "react-icons/si";

export const projects = [
  {
    id: 100,
    name: "puppies.com",
    description: "Este projeto é uma web page de um petshop. A página conta com apresentação dos serviços e dos produdtos em promoção. Além de um formulário para contato. Totalmente responsivo. Desenvolvido com React e Styled-Components.",
    code: "https://github.com/ValeskaLeandro/puppies-petshop",
    deploy: "https://valeskaleandro.github.io/puppies-petshop/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/puppies.com.png"
  },
  {
    id: 101,
    name: "Easybank",
    description: "Este projeto é uma web page de um banco online. A página conta com apresentação dos serviços e útltimos artigos. Totalmente responsivo.",
    code: "https://github.com/ValeskaLeandro/easybank-landing-page",
    deploy: "https://valeskaleandro.github.io/easybank-landing-page/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/easybank.png"
  },
  {
    id: 102,
    name: "The Bakery",
    description: "Este projeto é uma landing page de uma padaria. A página conta com apresentação dos serviços, dos principais produdtos e do time do estabelecimento. Além de um formulário para contato.",
    code: "https://github.com/ValeskaLeandro/the-bakery-landing-page",
    deploy: "https://valeskaleandro.github.io/the-bakery-landing-page/",
    tecnologys: [SiReact, TbBrandVite, SiCssmodules, SiJavascript],
    img: "./projects/thebakery.png"
  },
  {
    id: 103,
    name: "The movies",
    description: "Este projeto é uma web page com a apresentação e descrição de vários filmes. Para os dados foram feitas requisições a TMDB API. A página conta com responsidade, mecanismo de busca por nome, páginas de melhores filme, filme populares, recentes, em cartaz, página de detalhe dos filmes e filmes separados por gênero.",
    code: "https://github.com/ValeskaLeandro/themovies-tmdb",
    deploy: "https://themoviesvls.vercel.app/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiJavascript],
    img: "./projects/themovie.png"
  },
  {
    id: 104,
    name: "Portfólio",
    description: "Projeto pessoal com objetivo minhas habilidades com desenvolvedora front-end e, por suposto, digulgar meu trabalho de forma limpa e profissional.",
    code: "https://github.com/ValeskaLeandro/portfolio",
    deploy: "https://valeskaleandro.github.io/puppies-petshop/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/portfolio.png"
  },
]