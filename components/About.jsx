import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center p-16 ">
      <div className="  md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-semibold tracking-widest text-[#005FFF]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou eu</h2>
          <p className="py-2 text-gray-600">
            Sou apaixonado por aprender novas tecnologias e entendo que há mais
            de uma maneira de realizar uma tarefa. Me sinto realizado em
            encontrar soluções inovadoras, participar da criação de algo maior,
            sensação de inventar algo foi o que fez eu entrar nessa área e
            motiva a sempre aprender coisas novas. Sou desenvolvedor Full Stack
            com experiência nas mais diversas situações, tenho conhecimento em
            ReactJS, NextJS, NodeJS, TypeScript, Redux, MongoDB, AWS,
            metodologias ágeis e entre outras tecnologias que permeiam o
            desenvolvimento web. Aprendo rápido e posso aprender novas
            tecnologias conforme necessário. Acredito que ser um grande
            desenvolvedor não é usar uma linguagem específica, mas sim escolher
            a melhor ferramenta para o trabalho.
          </p>
          <p className="py-2 text-gray-600">
            Eu comecei a trabalhar com desenvolvimento web em 2018,
            desenvolvendo sites front-end usando HTML, CSS, Javascript e sempre
            busquei desde o início me aperfeiçoar em novas linguagens e
            tecnologias . Tenho experiência em trabalhar diretamente com
            clientes e levar wireframes simulados até os aplicativos
            implantados.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="/"
            width="520px"
            height="520px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
