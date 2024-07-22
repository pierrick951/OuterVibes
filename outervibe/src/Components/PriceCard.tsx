import { FaCheckCircle } from '../Icone-index'

type Props = {
  text: string;
  title: string;
  price: string;
  tabs: string[];
};

const hrefCardPrice:string='#contact'

function PriceCard({ text, title, price, tabs }: Props) {
  return (
    <div className="flex flex-col min-h-96 justify-between  ">
      <div>
        <div className="">
          <h1 className="text-2xl font-semibold pb-4 text-center ">{text}</h1>
          <hr className="bb-zinc-700" />
        </div>
        <div>
          <p className="py-4 text-center font-mono">{title}</p>
        </div>
      </div>
      <div className=' flex flex-col justify-between  h-full'>
        <ul className="flex flex-col px-2 lg:px-5 w-full ">
          {tabs.map((tab, index) => (
        
            <div key={index}  className='flex items-center gap-2 w-full my-2 '>
              <FaCheckCircle color='#3F3F46' className='w-[30px]' />
              <li className="flex flex-row font-normal text-xs md:text-lg  gap-2 py-2">
                <span>{tab}</span>
              </li>
            </div>
        
          ))}
        </ul>
        <div className=" text-center py-2 mt-4 rounded-xl w-full  bg-red-500  hover:bg-red-400 ">
          <a  href={hrefCardPrice} className=" text-md lg:text-md w-full py-2 px-2 xl:px-5 rounded-xl font-bold font-mono text-gray-50 ">{price}</a>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
