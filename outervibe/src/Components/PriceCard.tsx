import { FaCheckCircle } from '../Icone-index'

type Props = {
  text: string;
  title: string;
  price: number;
  tabs: string[];
};

const hrefCardPrice:string='#contact'

function PriceCard({ text, title, price, tabs }: Props) {
  return (
    <div className="flex flex-col h-full ">
      <div className="">
        <h1 className="text-2xl font-semibold pb-4 text-center ">{text}</h1>
        <hr className="bb-zinc-700" />
      </div>
      <div>
        <p className="py-4 text-center font-mono">{title}</p>
      </div>
      <ul className="flex flex-col px-5 ">
        {tabs.map((tab, index) => (
          <li key={index} className="flex flex-row items-center font-normal   gap-2 py-2">
            <FaCheckCircle color='#3F3F46' />
            <span>{tab}</span>
          </li>
        ))}
      </ul>
      <div className=" text-center py-2  mt-auto rounded-xl">
        <a  href={hrefCardPrice} className="text-xl py-2 px-5 rounded-xl font-bold font-mono text-gray-50  bg-red-500  hover:bg-red-400">{price}$</a>
      </div>
    </div>
  );
}

export default PriceCard;
