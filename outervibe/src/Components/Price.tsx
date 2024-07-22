import { nanoid } from "nanoid";
import PriceCard from "./PriceCard";
import { cardPricesType } from "../type";

const cardPrices: cardPricesType = [
  {
    id: nanoid(),
    text: "Petite Escapade",
    title: "De 1 à 3 jours",
    price: "145 €",
    tabs: [
      "Recherche Transport",
      "Recherche de l'hébergement",
      "Incontournable à faire sur place",
      "Carnet de voyage au format numérique",
    ],
  },
  {
    id: nanoid(),
    text: "Escapade",
    title: "De 4 a 10 jours ",
    price: "40€/j",
    tabs: [
      "Recherche d'une destination",
      "Recherche du transport ",
      "Recherche hébergement",
      "Trouver des activités",
      "Carnet de voyage au format papier ou numérique",
    ],
  },
  {
    id: nanoid(),
    text: " Grande Escapade",
    title: "Plus de 10 jours ",
    price: "En fonction du voyage",
    tabs: [
      "Recherche d'une ou de plusieurs destinations",
      "Recherche du transport",
      "Recherche hébergement",
      "Trouver des activités",
      "Carnet de voyage au format papier",
      "Coffret surprise"

    ],
  },
];

function Price() {
  return (
    <div id="price" className=" px-5 lg:px-36 xl:px-40  py-10  ">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center lg:gap-10    p-5 ">
        {cardPrices.map((item) => (
          <div
            key={item.id}
            className=" p-2 rounded-2xl h-auto w-full sm:w-80 lg:w-96 shadow-2xl cursor-pointer  hover:animate-pulse bg-gradient-to-tr from-gray-50 to-zinc-100
            "
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
