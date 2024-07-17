import { nanoid } from "nanoid";
import { Slidersrc } from "../type";
import {FaArrowDown } from "../Icone-index"

function HeroSection() {

  const imgSlider: Slidersrc = [
    { id: nanoid(), srcSlider: "carousel-one" },
   
  ];

  const TextHeroSection: string[] = [
    "Découvrir",
    "Votre aventure sur mesure, planifiée à la perfection",
    "Parter a",
    "L'aventure",
  ];
 

  return (
    <div className="px-5 lg:px-36 xl:px-40 w-full  overflow-x-hidden pt-24">
      <div className="h-[500px] lg:h-[600px]">
        {imgSlider.map((item) => (
          <div
            key={item.id}
            className={` inset-0  transition-opacity duration-500 `}
          ><div className={`w-full h-full bg-carousel-one rounded-xl bg-cover bg-center`}>
            
              <div className=" p-2 gap-3 md:p-10 lg:p-15 xl:p-20  text-center md:text-start">
                <h1 className="  flex gap-2 flex-col uppercase text-3xl md:text-4xl  lg:text-5xl xl:text-8xl font-bold text-gray-50">
                  <span>{TextHeroSection[2]}</span>
                  <span className="text-red-400">{TextHeroSection[3]}</span>
                </h1>
                <p className="text-white font-mono  text-md lg:text-lg xl:py-5">
                  {TextHeroSection[1]}
                </p>
                <button className="btn glass  mt-2 lg:px-10 bg-red-400 -z-20 btn-sm  text-white">
                  {TextHeroSection[0]}
                </button>
              </div>
              <div className=" hidden md:flex w-full  fle-row justify-center p-2">
                <button className=" rounded-full bg-zinc-800/80 p-2 animate-bounce">
                <FaArrowDown />
                </button>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HeroSection;
