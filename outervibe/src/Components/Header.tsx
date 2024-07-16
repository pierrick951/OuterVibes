import { useState } from "react";
import { nanoid } from "nanoid";
import HeroSection from "./HeroSection";
import { SocialeType } from "../type";
import {CgMenuGridO, FaPinterest, IoLogoInstagram, LuLinkedin, IoMdClose} from '../Icone-index'





function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const title: string = "Outer Vibes*";
  const tabs: string[] = ["A Propos", "fonctionnement", "Formule", "Contact"];

  const socialLink: SocialeType = [
    {
      id: nanoid(),
      element: <IoLogoInstagram color="#f1f1f1" className="w-5" />,
      link: "https://www.instagram.com/",
    },
    {
      id: nanoid(),
      element: <LuLinkedin color="#f1f1f1" className="w-5" />,
      link: "https://www.linkedin.com/in/gaelle-boudassou/",
    },
    {
      id: nanoid(),
      element: <FaPinterest color="#f1f1f1" className="w-8" />,
      link: "https://www.pinterest.com/",
    },
  ];

  return (
    <header className="w-screen  ">
      <nav className=" flex flex-row justify-between items-center p-5 xl:px-40 fixed w-full z-20 top-0">
        <div className="">
          <h1 className="  text-zinc-950 font-semibold text-lg xl:text-xl">
            {title}
          </h1>
        </div>
        <ul className="hidden md:flex font-semibold flex-row gap-5 justify-center text-zinc-900 capitalize text-mono">
          {tabs.map((item) => (
            <li key={item} className=" hover:text-zinc-700">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <a href={socialLink[0].link} 
            className="p-2 rounded-xl hidden md:block">
              <IoLogoInstagram color="#1c1c1c" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
              {isOpen ? (
                <IoMdClose color="#1c1c1c" />
              ) : (
                <CgMenuGridO color="#1c1c1c" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <ul className="absolute w-full top-16 p-6  bg-zinc-900   flex flex-col gap-2 md:hidden capitalize">
          {tabs.map((item) => (
            <li key={item} className="text-gray-100 ">
              <a href="#27272a">{item}</a>
            </li>
          ))}
          <div>
            <hr className="text-gray-100  py-2" />
            <div className="flex flex-row items-center justify-center gap-3">
              {socialLink.map(({id,link,element}) => (
                <a href={link} key={id}>
                  {element}
                </a>
              ))}
            </div>
          </div>
        </ul>
      )}
      <HeroSection/>
    </header>
  );
}
export default Header;
