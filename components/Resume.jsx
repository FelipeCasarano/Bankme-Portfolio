import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Bankmer from "../public/assets/bankmer.PNG";

const Resume = () => {
  return (
    <div id="resume" className="w-full lg:h-screen p-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl font-semibold  tracking-widest uppercase text-[#005FFF]">
          Resumo
        </p>
        <h2 className="py-4">Como posso agregar ao Bankme!</h2>

        <div className=" flex justify-center col-span-3 lg:col-span-2  w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full ">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={Bankmer}
                alt="/"
              />
            </div>
            <div>
              <h3 className="py-2">
                &quot;O ponto de partida de qualquer conquista é o desejo.&quot;
                Napoleon Hill
              </h3>
              <p className="py-4">
                Acredito que com meu conhecimento técnico como desenvolvedor
                Full Stack posso atingir as expectativas necessárias, possuo
                experiência em diversas tecnologias relevantes para o
                desenvolvimento web, como ReactJS, NextJS, NodeJS, Jest,
                TypeScript, GitHub, MongoDB e AWS. Além disso, estou
                familiarizado com metodologias ágeis. Isso me permite trabalhar
                de forma eficiente em equipes multidisciplinares, contribuindo
                para o desenvolvimento de projetos complexos. Minha capacidade
                de aprendizado rápido e meu engajamento por novos conhecimentos
                me permite adaptar-me a novas tecnologias conforme necessário
                para vaga, estou sempre disposto a expandir meu conhecimento e
                enfrentar desafios técnicos.
              </p>
              <p className="py-4">
                Em resumo, acredito que posso agregar à empresa tanto em termos
                de habilidades técnicas quanto de mentalidade colaborativa e
                inovadora. Estou animado com a oportunidade de fazer parte de
                uma empresa que busca constantemente transformar o mercado por
                meio de soluções inovadoras, e estou comprometido em contribuir
                com meu conhecimento e disposto a aprender com a equipe.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between max-w-[200px] m-auto py-4">
                <a
                  href="https://www.linkedin.com/in/felipe-casarano-883b0918a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/FelipeCasarano"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#005FFF]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
