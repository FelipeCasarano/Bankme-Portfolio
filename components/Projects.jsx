import React from "react";
import ecmoney from "../public/assets/projects/tela.PNG";
import calendario from "../public/assets/projects/Calendario.PNG";
import portfolio from "../public/assets/projects/portfolio.PNG";
import autenticador from "../public/assets/projects/Autenticador.PNG";
import bankmeP from "../public/assets/projects/bankmeP.PNG";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto p-8">
        <p className="text-xl tracking-widest font-semibold uppercase text-[#005FFF] ">
          PROJETOS
        </p>
        <h2 className="py-4">O que eu construí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecmoney web site"
            backgroundImg={ecmoney}
            projectUrl="https://www.ecmoney.com.br/"
            tech="React JS"
          />
          <ProjectItem
            title="Calendário Google"
            backgroundImg={calendario}
            projectUrl="https://github.com/FelipeCasarano/calendario-usjt"
            tech="React JS"
          />
          <ProjectItem
            title="Portfolio Musical"
            backgroundImg={portfolio}
            projectUrl=""
            tech="React JS"
          />
          <ProjectItem
            title="Autenticador"
            backgroundImg={autenticador}
            projectUrl="https://github.com/FelipeCasarano/Authentication"
            tech="Next JS"
          />
          <ProjectItem
            title="Bankme Portfolio"
            backgroundImg={bankmeP}
            projectUrl="https://github.com/FelipeCasarano/Bankme-Portfolio"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
