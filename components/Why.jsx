import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import Team from "../public/assets/team.webp";

const Why = () => {
  return (
    <div id="about" className="w-full p-2 m-auto flex items-center p-16">
      <div className="flex-col md:flex-row">
        <div className="col-span-2 order-first md:order-last">
          <h2 className="py-4">
            Porque eu quero ser um{" "}
            <span className="text-[#005FFF]"> Bankmer </span>
          </h2>
          <p className="py-2 text-gray-600">
            Acredito que minha paixão por aprender e minha busca por soluções
            inovadoras se alinham perfeitamente com o propósito e a cultura da
            empresa. Profissionalmente seria uma realização trabalhar em uma
            empresa que tenha um propósito maior e busque encontrar novas
            soluções para mercado, que implemente novas tecnologias e tenha um
            projeto inovador, fazer parte de algo que está realmente
            transformando e em transformação.
          </p>
          <p className="py-2 text-gray-600 pb-4">
            Além disso, a descrição da empresa sobre nutrir um ambiente de
            trabalho harmônico, fortalecer-se nos momentos difíceis e comemorar
            todas as vitórias ressoa com a minha própria abordagem de trabalho.
            Valorizo o trabalho em equipe, a colaboração e o compartilhamento de
            propósito. Acredito que, ao trabalhar com pessoas que compartilham
            essa mentalidade, poderei crescer tanto pessoalmente quanto
            profissionalmente. Portanto, estou animado e motivado para fazer
            parte dessa empresa, contribuir com meu conhecimento e aprender com
            uma equipe de profissionais apaixonados.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 order-last md:order-first">
          <div className="max-w-[832px]">
            <Image src={Team} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
