import { nanoid } from "nanoid";
import Gaelle from "../assets/gb.jpg";
import TabsItem from "./TabsItem";
import { CardType } from "../type";
import Title from '../Components/Title';
import {
  IoTimeOutline,
  MdOutlineTravelExplore,
  BsPersonVcard,
} from "../Icone-index";

const aboutContent: string[] = [
  "Pourquoi un travel planer ?",
  "A Propos",
  " je suis Gaëlle, passionnée de voyages. Forte de mes expériences, je suis spécialisée dans l'organisation de voyages sur mesure, vous offrant le meilleur pour votre aventure.",
  "Me contacter",
  "#contact",
  "photo de Gaelle Boudassou, Creatrice de outer vibes"
];

const Tabs: CardType = [
  {
    id: nanoid(),
    ico: <IoTimeOutline />,
    text: "Gain de Temps et Stress Réduit",
  },
  {
    id: nanoid(),
    ico: <MdOutlineTravelExplore />,
    text: "Accès à des connaissances et expériences locales",
  },
  {
    id: nanoid(),
    ico: <BsPersonVcard className="w-10" />,
    text: "Personnalisation et voyage sur-mesure",
  },
];
function About() {
  return (
    <div className="px-5 lg:px-36 xl:px-40 w-full h-auto">
      <div className="flex flex-col text-center ">
        <div className="pb-3">
        <Title title={aboutContent[0]}/>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 justify-center items-center lg:justify-between pb-5">
          {Tabs.map((item) => (
           <TabsItem key={item.id} objet={item}/>
          ))}
        </div>
      </div>
      <div  id="about" className="flex flex-col text-start bg-gradient-to-br from-gray-100 to-zinc-100 rounded-xl shadow-2xl px-5 mb-10 h-auto ">
        <div className=" py-5 lg:py-10  ">
         <Title  title={aboutContent[1]}/>
          <hr />
        </div>
        <div className="flex flex-col items-center  justify-center lg:flex-row pb-5 rounded-xl h-auto">
          <div className="px-2 text-center lg:w-2/4 py-5">
            <p className="leading-10  py-2 ">{aboutContent[2]}</p>
            <a href={aboutContent[4]} className="bg-red-500 animate-pulse px-5 py-2 rounded-2xl mb-3 text-gray-50 font-semibold :">
              {aboutContent[3]}
            </a>
          </div>

          <img
            className="  w-full lg:w-auto h-[200px] object-cover rounded-2xl px-2 py-2"
            src={Gaelle}
            alt={aboutContent[5]}
          />
        </div>
      </div>
    </div>
  );
}
export default About;
