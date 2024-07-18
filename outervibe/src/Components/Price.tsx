import { nanoid } from "nanoid";
import PriceCard from "./PriceCard";
import { cardPricesType } from "../type";

const cardPrices: cardPricesType = [
  {
    id: nanoid(),
    text: "Eco",
    title: "reserver vous une pause a moindre coup",
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
    className=" justify-center items-center bg-zinc-800 p-10 px-5 w-full">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:gap-10 ">
        {cardPrices.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-50 to-gray-200 p-2 rounded-2xl max-w-60 w-80 h-96 lg:w-96 shadow-2xl cursor-pointer  hover:animate-pulse"
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
