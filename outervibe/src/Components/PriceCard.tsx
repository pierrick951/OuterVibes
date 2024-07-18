import { FaCheckCircle } from '../Icone-index'

type Props = {
  text: string;
  title: string;
  price: number;
  tabs: string[];
};

function PriceCard({ text, title, price, tabs }: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full">
        <h1 className="text-2xl font-semibold pb-4 text-center">{text}</h1>
        <hr className="bb-zinc-700" />
      </div>
      <div>
        <p className="py-4 text-center">{title}</p>
      </div>
      <ul className="flex flex-col flex-grow">
        {tabs.map((tab, index) => (
          <li key={index} className="flex flex-row items-center font-thin gap-2 py-2">
            <FaCheckCircle color='#dc2626' />
            <span>{tab}</span>
          </li>
        ))}
      </ul>
      <div className="w-full text-center py-2 mt-auto">
        <p className="text-xl font-bold">{price}$</p>
      </div>
    </div>
  );
}

export default PriceCard;
