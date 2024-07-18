import { useState } from "react";
import { CgMenuGridO,FaPinterest, IoLogoInstagram, LuLinkedin, IoMdClose } from "../Icone-index";

import HeroSection from "./HeroSection";
import SocialLinks from "./SocialLinks";
import { NavType } from "../type";
import { nanoid } from "nanoid";
import { SocialeType } from "../type";





function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const title: string = "Outer Vibes*";
  const tabs:NavType = [

    {id:nanoid(), text:"A Propos", link:'#about'},
    {id:nanoid(), text:"Fonctionnement", link:'#'},
    {id:nanoid(), text:"Formule", link:'#price'},
    {id:nanoid(), text:"Contact", link:'#contact'},
   ];

  const linkButtonNav:string ="https://www.instagram.com/"

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
    <header

    className="w-screen overflow-x-hidden">
      <nav className=" flex flex-row justify-between items-center p-5 xl:px-40 fixed w-full z-20 top-0 bg-gray-50 ">
        <div className="">
          <h1 className="  text-zinc-950 font-semibold text-lg xl:text-xl">
            {title}
          </h1>
        </div>
        <ul className="hidden md:flex font-semibold flex-row gap-5 justify-center text-zinc-900 capitalize text-mono ">
          {tabs.map(({id,text,link}) => (
            <li key={id} className=" hover:text-zinc-700">
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <a href={linkButtonNav} 
            className="p-2 rounded-xl hidden md:block">
              <IoLogoInstagram color="#1c1c1c" className="animate-bounce" />
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
        <ul className=" fixed w-full top-16 p-6  bg-zinc-900   flex flex-col gap-2 md:hidden capitalize z-50">
          {tabs.map((item) => (
            <li key={item.id} className="text-gray-100 ">
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
          <div>
            <hr className="text-gray-100  py-2" />
            <div className="flex flex-row items-center justify-center gap-3">
      {socialLink.map((item) => (
        <SocialLinks key={item.id} element={item.element} link={item.link} />
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
