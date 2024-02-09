import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import WhatsAppIcon from "../icons/Whatsapp";

export function Sobre() {
  return (
    <div>
      <div className="lg:mb-12 mb-10 flex items-start justify-center lg:justify-start bg-[#252525] w-full  border-t border-b border-[#838383] my-4">
        <h2 className="font-extrabold text-3xl mx-24 py-16 ">SOBRE</h2>
      </div>
      <div className="lg:flex flex-col lg:mx-[200px] ">
        <div className="lg:grid grid-cols-3 items-center justify-center ">
          <div className="col-span-1 ">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#aaa] rounded-[50%] w-[200px] h-[200px] overflow-hidden relative">
                <img
                  src="avatar.png"
                  alt=""
                  className="absolute bottom-0 w-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 items-center mt-10 lg:mt-0 ">
            <div>
              <p className="text-2xl text-justify font-bold p-3">
                Sou um desenvolvedor back-end especializado em C#/Asp.net e SQL
                Server. Minha experiência inclui a criação de APIs RESTful, bem
                como integrações com APIs existentes. Com formação em Engenharia
                Civil e pós-graduações em Análise e Desenvolvimento de Programas
                e Projetos de Aplicativos Móveis Multiplataforma. Quando
                necessário um front-end, utilizo o React/Typescript. Também já
                trabalhei com o Node.js e MySQL, onde tenho projetos construídos
                com essas tecnologias.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7 mt-8 lg:mt-64">
          <a href="https://github.com/mattmascarenhas">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mattmascarenhas/">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/">
            <InstagramIcon />
          </a>
          <a href="https://wa.me/5575991105310" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
