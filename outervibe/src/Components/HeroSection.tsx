import { nanoid } from "nanoid";
import { Slidersrc } from "../type";
import { FaArrowDown } from "../Icone-index";
import { Helmet } from "react-helmet";

function HeroSection() {
  const imgSlider: Slidersrc = [{ id: nanoid(), srcSlider: "carousel-one" }];
  const titlePage: string = "Votre aventure commence ici";
  const TextHeroSection: string[] = [
    "Découvrir",
    "Votre aventure sur mesure, planifiée à la perfection",
    "Parter a",
    "L'aventure",
  ];

  return (
    <div className="px-5 lg:px-36 xl:px-40  w-full pt-24 ">
      <Helmet>
        <title>{titlePage}</title>
        <meta
          name="description"
          content="Découvrez votre aventure sur mesure, planifiée à la perfection."
        />
      </Helmet>

      <div className="h-auto pb-16 ">
        {imgSlider.map((item) => (
          <div
            key={item.id}
            className="bg-carousel-one rounded-xl bg-cover bg-center"
          >
            <div className=" p-2 gap-3 md:p-10 lg:p-15 xl:p-20  text-center md:text-start">
              <h1 className="  flex gap-2 flex-col uppercase text-3xl md:text-4xl  lg:text-5xl xl:text-8xl font-bold text-gray-50">
                <span>{TextHeroSection[2]}</span>
                <span className="text-red-500">{TextHeroSection[3]}</span>
              </h1>
              <p className="text-white font-mono  text-md lg:text-lg xl:py-5">
                {TextHeroSection[1]}
              </p>
              <button className="rounded-xl py-1 px-4  mt-2 lg:px-10 bg-red-600 hover:bg-red-500 font-medium  text-white">
                {TextHeroSection[0]}
              </button>
            </div>
            <div className=" hidden md:flex w-full  flex-row justify-center p-2">
              <button className=" rounded-full bg-zinc-800/80 p-2 animate-bounce">
                <FaArrowDown color="#f1f1f1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HeroSection;
