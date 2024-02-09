import Logo2 from "../header/Logo2";
import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Pin from "../icons/Pin";
import WhatsAppIcon from "../icons/Whatsapp";

export function Footer() {
  return (
    <div className="flex flex-col lg:flex-row  justify-between lg:px-[50px] lg:py-[20px] p-[10px] bg-[#004482]">
      <div className="flex items-center justify-center mb-4 lg:mb-8 lg:w-1/4">
        <Logo2 fill={`#ffff`} />
      </div>
      <div className="flex items-center justify-center flex-col gap-4 lg:w-2/5 ">
        <div className="flex items-center justify-center gap-7 lg:mt-7 mt-4 lg:w-1/5">
          <a
            href="https://github.com/mattmascarenhas"
            target="_blank"
            className="mr-3"
          >
            <Mail />
          </a>
          <a
            href="https://www.instagram.com/mattmascarenhas/"
            target="_blank"
            className="mt-1"
          >
            <InstagramIcon />
          </a>
          <a href="https://wa.me/75983315441" target="_blank" className="mt-1">
            <WhatsAppIcon />
          </a>
        </div>
        <div>
          <h1 className="text-xl font-bold">© 2024- Evolução Contabilidade.</h1>
        </div>
      </div>
      <div className="lg:w-2/5 space-y- justify-center flex flex-col items-start ml-10">
        <div className="flex gap-2">
          <Pin />
          <h1 className="text-xl font-bold">
            Av. João Durval Carneiro, 3496 - Caseb - Feira de Santana/BA
          </h1>
        </div>
      </div>
      <div className="lg:w-1/5 space-y- justify-start flex flex-col items-end pt-10">
        <div>
          <img
            src="maps2.png"
            alt=""
            className="lg:w-[200px] w-[200px] mt-6 lg:mt-0 rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
