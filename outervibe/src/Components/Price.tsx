import { nanoid } from "nanoid";
import PriceCard from "./PriceCard";
import { cardPricesType } from "../type";

const cardPrices: cardPricesType = [
  {
    id: nanoid(),
    text: "Eco",
    title: "Reserver vous une pause a moindre coup",
    price: 50,
    tabs: [
      "Evasion Rapide",
      "City Break",
      "Escapade Urbaine",
      "Détente Express",
    ],
  },
  {
    id: nanoid(),
    text: "Week end",
    title: "En france ou en europe",
    price: 40,
    tabs: ["Voyage Économique", "Vacances Malines", "Aventure Low-Cost"],
  },
  {
    id: nanoid(),
    text: "Roadtrip",
    title: "Road trip",
    price: 50,
    tabs: [
      "Aventure Routière",
      "Route Panoramique",
      "Escapade Urbaine",
      "Tour des Régions",
    ],
  },
];

function Price() {
  return (
    <div 
    id="price"
    className=" px-5 lg:px-36 xl:px-40  py-10 bg-zinc-800 ">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:gap-10    rounded-xl shadow-xl p-5 ">
        {cardPrices.map((item) => (
          <div
            key={item.id}
            className=" p-2 rounded-2xl h-96 w-full sm:w-80 lg:w-96 shadow-2xl cursor-pointer  hover:animate-pulse bg-white"
          >
            <PriceCard
              key={item.id}
              text={item.text}
              title={item.title}
              price={item.price}
              tabs={item.tabs}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
