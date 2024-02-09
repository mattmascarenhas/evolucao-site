import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import WhatsAppIcon from "../icons/Whatsapp";

export function Dropdown(props: any) {
  const nodeRef = useRef(null);

  return (
    <div className="flex flex-col justify-between items-center h-[80%] ">
      <div className="flex flex-col gap-12">
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#inicio" className=" flexjustify-centerr ">
              <span className="text-white font-bold">ínicio</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#portfolio" className=" flexjustify-centerr ">
              <span className="text-white font-bold">portfólio</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#experiencia" className="flex justify-center">
              <span className="text-white font-bold">experiência</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#tecnologias" className="flex justify-center">
              <span className="text-white font-bold">tecnologias</span>
            </a>
          </button>
        </div>
        <div className="flex justify-center flex-col">
          <button onClick={props.dropMenu}>
            <a href="#sobre" className="flex justify-center">
              <span className="text-white font-bold">sobre</span>
            </a>
          </button>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-center gap-7 my-4">
          <a href="https://github.com/mattmascarenhas" target="_blank">
            <GitHubIcon fill="#ffffff" />
          </a>
          <a
            href="https://www.linkedin.com/in/mattmascarenhas/"
            target="_blank"
          >
            <LinkedinIcon fill="#ffffff" />
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/" target="_blank">
            <InstagramIcon fill="#ffffff" />
          </a>
          <a href="https://wa.me/5575991105310" target="_blank">
            <WhatsAppIcon fill="#ffffff" />
          </a>
        </div>
        <p className="text-white font-bold text-lg">
          © 2023 — @mattmascarenhas
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
