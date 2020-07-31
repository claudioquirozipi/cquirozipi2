import edteamImg from "../../img/certificates/edTeam.png";
import udemyimg from "../../img/certificates/udemy.png";
import platziImg from "../../img/certificates/platzi.webp";

import awsImg from "../../img/certificates/awsUdemy.jpg";
import reduxImg from "../../img/certificates/reduxUdemy.jpg";
import firebaseImg from "../../img/certificates/firebaseEDTeam.png";
import jsImg from "../../img/certificates/jsEDTeam.png";
import varCssImg from "../../img/certificates/varCssEDTeam.png";

export interface courses extends Array<course> {}
export interface course {
  certificate: certificate;
  institute: institute;
}
interface certificate {
  img: string;
  title: string;
  description?: string;
  date: string;
}
interface institute {
  img: string;
  name: string;
}

const edTeam: institute = {
  img: edteamImg,
  name: "EDTeam",
};

const udemy: institute = {
  img: udemyimg,
  name: "Udemy",
};

const platzi: institute = {
  img: platziImg,
  name: "Platzi",
};

export const data: courses = [
  {
    certificate: {
      img: awsImg,
      title: "Serverless en español con AWS y Serverless Framework",
      date: "29/may/2020",
    },
    institute: udemy,
  },
  {
    certificate: {
      img: reduxImg,
      title: " Aprende Redux con React hooks y GraphQL fácilmente ",
      date: "05/jul/2020",
    },
    institute: udemy,
  },
  {
    certificate: {
      img: firebaseImg,
      title: "Firebase",
      description:
        "Crear sitios y aplicaciónes webs usando Firebase como backend",
      date: "13/oct/2018",
    },
    institute: edTeam,
  },
  {
    certificate: {
      img: jsImg,
      title: "JavaScript desde cero",
      description:
        "Aprender el lenguaje de programación más importante de la web sin conocimientos previos",
      date: "21/mnov/2018",
    },
    institute: edTeam,
  },
  {
    certificate: {
      img: varCssImg,
      title: "Variables Css",
      description:
        "!Css al fin tiene variables nativas con soporte total de los navegadores¡, este curso te enseña varios trucos para usarlas en tus proyectos",
      date: "23/oct/2018",
    },
    institute: edTeam,
  },
];
