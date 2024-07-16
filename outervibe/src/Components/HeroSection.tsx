import { nanoid } from "nanoid";
import { sliderType, Slidersrc } from "../type";

function HeroSection() {
  const sliderIndicator: sliderType = [
    { id: nanoid(), label: "Slide 1", slideIndex: "1" },
    { id: nanoid(), label: "Slide 2", slideIndex: "2" },
    { id: nanoid(), label: "Slide 3", slideIndex: "3" },
  ];

  const imgSlider: Slidersrc = [{ id: nanoid(), srcSlider: "" }];

  const titleHero = [
 {span1: "Parter a"},
 {span2: "L'aventure"}
  ];
  const underText:string = 'Votre aventure sur mesure, planifiée à la perfection'

  return (
    <div className=" px-4 xl:px-40 w-full  overflow-x-hidden pt-36">
      <div className="h-56 lg:h-[600px]">
        {imgSlider.map((item) => (
          <div key={item.id} className="w-full h-full bg-amber-200 rounded-xl">
            <div className=" p-2 lg:p-15 xl:p-20  text-center lg:text-start">
                <h1 className="  flex gap-2 flex-col uppercase text-3xl  lg:text-5xl xl:text-8xl font-bold text-white">
                    <span>{titleHero[0].span1}</span>
                    <span>{titleHero[1].span2}</span>
                </h1>
                <p>{underText}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-2">
        {sliderIndicator.map((item) => (
          <button
            className="w-3 h-3 rounded-full bg-zinc-700"
            key={item.id}
            type="button"
            aria-label={item.label}
          ></button>
        ))}
      </div>
    </div>
  );
}
export default HeroSection;
