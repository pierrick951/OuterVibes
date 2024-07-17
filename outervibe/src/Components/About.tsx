import { nanoid } from "nanoid";
import {
  IoTimeOutline,
  MdOutlineTravelExplore,
  BsPersonVcard,
} from "../Icone-index";
import { CardType } from "../type";

function About() {
  const aboutContent: string[] = ["Pourquoi un travel planer ?","A Propos"];

  const Tabs: CardType = [
    {
      id: nanoid(),
      ico: <IoTimeOutline />,
      text: "Gain de Temps et de Stress Réduit",
    },
    {
      id: nanoid(),
      ico: <MdOutlineTravelExplore />,
      text: "Accès à des Connaissances et Expériences Locales",
    },
    {
      id: nanoid(),
      ico: <BsPersonVcard className="w-10" />,
      text: "Personnalisation et Sur-Mesure",
    },
  ];

  return (
    <div className="px-5 lg:px-36 xl:px-40 w-full ">
      <div className="flex flex-col text-center ">
        <div className="pb-3">
          <h1 className="text-zinc-800 text-xl lg:text-3xl font-semibold pb-10">
            {aboutContent[0]}
          </h1>
          <hr />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 justify-center items-center lg:justify-between pb-5">
          {Tabs.map((item) => (
            <div
              key={item.id}
              className="  h-50 bg-gradient-to-br from-gray-100 to-zinc-100 flex flex-col justify-center items-center  md:w-96 shadow-xl p-5  rounded-2xl"
            >
              <p className="text-red-400   text-3xl lg:text-5xl ">{item.ico}</p>

              <p className=" text-zinc-700  py-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="py-10">
          <h1 className="text-zinc-800 text-xl lg:text-3xl font-semibold pb-10">
            {aboutContent[0]}
          </h1>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default About;
