import React from "react";
import Image from "next/image";
import Bankme from "../public/assets/svg/bankme.svg";
import Eu from "../public/assets/perfil/eu.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            VAMOS CONSTRUIR JUNTOS
          </p>
          <h1 className="py-4 text-gray-700">
            Olá,
            <br /> meu nome é <span className="text-[#005FFF]"> Felipe </span>
          </h1>
          <Image src={Eu} alt="foto felipe" width={200} height={200} />
          <h2 className="py-2 text-gray-700">
            Por que quero fazer parte do{" "}
            <Image src={Bankme} alt="logo Bankme" /> ?
          </h2>

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Vou falar um pouco sobre mim, o motivo de querer fazer parte e como
            acredito que posso agregar ao Bankme.
          </p>
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
  );
};

export default Main;
