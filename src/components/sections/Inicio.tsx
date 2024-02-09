"use client";
import FullStackDeveloper from "../images/FullStackDeveloper";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import WhatsAppIcon from "../icons/Whatsapp";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export function Inicio() {
  return (
    <div className="lg:flex lg:mx-[200px] gap-8 items-center justify-between lg:pt-[200px] lg:mb-[130px]">
      <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 max-w-2xl text-left ml-0 mr-auto justify-center flex flex-col items-center">
        <h1 className="mb-6 text-left text-7xl">
          Potencialize Seu Negócio Agora
        </h1>
        <p className="body-large text-2xl ">
          Assessoria contábil especializada para transformar a gestão financeira
          da sua empresa.
        </p>
        <div className="flex flex-col mt-10 justify-center items-center ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" text-[#e7f6f2] p-5 text-2xl font-bold rounded-3xl border-2 border-white"
          >
            <Link
              to=""
              href="https://wa.me/5575983315441"
              target="_blank"
              spy={true}
              smooth={true}
              duration={200}
              style={{ color: "#ffffff" }}
            >
              Agendar Reunião
            </Link>
          </motion.button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="21.png"
          alt=""
          className="lg:w-[1200px] w-[400px] mt-6 lg:mt-0 rounded-lg shadow-lg border border-gray-200"
        />
      </div>
    </div>
  );
}

export default Inicio;
