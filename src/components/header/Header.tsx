"use client";
import Logo from "./Logo1";
import Logo2 from "./Logo2";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import MatheusMascarenhasResponsive from "../images/MatheusMascarenhasResponsive";
import MenuIcon from "../icons/MenuResponsive";
import { CSSTransition } from "react-transition-group";
import Dropdown from "../utils/Dropdown";
import CloseButton from "../icons/Close";
import WhatsAppIcon from "../icons/Whatsapp";

export function Header() {
  const headerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = headerRef.current
      ? (headerRef.current as HTMLDivElement).offsetHeight
      : 0;
    const offset = section ? section.offsetTop - headerHeight : 0;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerClass = `flex items-center fixed justify-between lg:px-[80px] pr-[16px] top-0 left-0 w-[100%] z-[100] py-4 ${
    scrolled ? "bg-[#004482]" : ""
  }`;

  return (
    <div
      className={`flex flex-col items-center justify-between lg:px-[80px] pr-[16px] top-0 left-0 w-[100%] z-[100] py-4`}
    >
      {/* <Logo2 fill={`#ffff`} /> */}
      <div className={headerClass}>
        <Link
          activeClass="active"
          to="empresa"
          spy={true}
          smooth={true}
          duration={200}
          style={{ cursor: "pointer" }}
        >
          <div className="flex lg:gap-5 gap-2 items-center mx-4 mt-3 cursor-default ">
            <Logo fill={`#ffff`} />
          </div>
        </Link>
        <div className="fixed right-0 pr-4 lg:hidden">
          <button className="p-1" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon fill={`#ffff`} />
          </button>
        </div>
        <CSSTransition
          in={showMenu}
          timeout={500}
          classNames="menu-transition fade"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <div
            ref={nodeRef}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-95 z-30 "
          >
            <div className="fixed mx-12 justify-start my-5">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="mx-5 my-8 fixed right-0">
              <button onClick={() => setShowMenu(!showMenu)}>
                <CloseButton />
              </button>
            </div>
            <div className="fixed top-20 left-0 w-full h-full items-center justify-center flex-col flex gap-4 font-thin text-3xl ">
              <Dropdown dropMenu={() => setShowMenu(!showMenu)} />
            </div>
          </div>
        </CSSTransition>
        <ul className="hidden lg:flex lg:self-center lg:justify-center lg:gap-16 lg:list-none lg:text-2xl lg:font-bold lg:p-0">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link
              activeClass="active"
              to="empresa"
              spy={true}
              smooth={true}
              duration={200}
              style={{ cursor: "pointer" }}
              className={"text-[#ffff]"}
            >
              empresa
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link
              activeClass="active"
              to="soluções"
              spy={true}
              smooth={true}
              duration={200}
              style={{ cursor: "pointer" }}
              className={"text-[#ffff]"}
            >
              soluções
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("experiencia")}
          >
            <Link
              activeClass="active"
              to="experiencia"
              spy={true}
              smooth={true}
              duration={200}
              style={{ cursor: "pointer" }}
              className={"text-[#ffff]"}
            >
              depoimentos
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("experiencia")}
          >
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              duration={200}
              style={{ cursor: "pointer" }}
              className={"text-[#ffff]"}
            >
              contato
            </Link>
          </motion.li>
        </ul>
        <button
          className="bg-green-500 text-white font-bold rounded-full pr-2 ml-2 flex items-center cursor-pointer"
          onClick={() => {
            window.open("https://wa.me/5575983315441", "_blank");
          }}
        >
          <WhatsAppIcon />
          Atendimento
        </button>
      </div>
    </div>
  );
}
