import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaPinterest } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { nanoid } from "nanoid";

type Props = {};

function Header({}: Props) {
  const [isopen, setIsOpen] = useState(false);

  const title: string = "Outer Vibes*";
  const tabs: string[] = ["A Propos", "fonctionnement", "Formule", "Contact"];
  const SocialLink = [
    {
      id: nanoid(),
      element: <IoLogoInstagram color="#f1f1f1" className="w-5" />,
    },
    { id: nanoid(), element: <LuLinkedin color="#f1f1f1" className="w-5" /> },
    { id: nanoid(), element: <FaPinterest color="#f1f1f1" className="w-8" /> },
  ];

  return (
    <header className="w-screen">
      <nav className=" flex flex-row justify-between items-center p-5 ">
        <div className="">
          <h1 className="  text-zinc-950 font-semibold text-lg xl:text-xl">
            {title}
          </h1>
        </div>
        <ul className="hidden md:flex font-semibold flex-row gap-5 justify-center text-zinc-900 capitalize text-mono">
          {tabs.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <button className="p-2 rounded-xl hidden lg:block">
              <IoLogoInstagram color="#1c1c1c" />
            </button>
            <button onClick={() => setIsOpen(!isopen)} className="sm:hidden">
              {isopen ? (
                <IoMdClose color="#1c1c1c" />
              ) : (
                <CgMenuGridO color="#1c1c1c" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isopen && (
        <ul className="absolute w-full top-16 p-6  bg-zinc-900 rounded-b-xl  flex flex-col gap-2 md:hidden">
          {tabs.map((item) => (
            <li key={item} className="text-gray-100 ">
              <a href="#27272a">{item}</a>
            </li>
          ))}
          <div>
            <hr className="text-gray-100  py-2" />
            <div className="flex flex-row items-center justify-center gap-3">
              {SocialLink.map((item) => (
                <button key={item.id}>{item.element}</button>
              ))}
            </div>
          </div>
        </ul>
      )}
    </header>
  );
}
export default Header;
