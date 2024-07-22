import { nanoid } from "nanoid";
import SocialLinks from "./SocialLinks";
import { SocialeType } from "../type";
import { IoLogoInstagram ,LuLinkedin,FaPinterest } from '../Icone-index'

const currentYear = new Date().getFullYear()
const contentFooter: string[] = [
      "Outervibes*",
       `© ${currentYear} Outer Vibes. Tous droits réservés`

];
const pB:string = 'https://bento.me/etuve'
const credit:string  = 'Created By Pierrick Bernard'


const socialLinkContact: SocialeType = [
  {
    id: nanoid(),
    element: <IoLogoInstagram color="#f1f1f1" className="w-5" />,
    link: "https://www.instagram.com/outervibes.trvl/?__d=1%3Futm_source%3Dig_embed",
  },
  {
    id: nanoid(),
    element: <LuLinkedin color="#f1f1f1" className="w-5" />,
    link: "https://www.linkedin.com/in/gaelle-boudassou/",
  },
  {
    id: nanoid(),
    element: <FaPinterest color="#f1f1f1" className="w-8" />,
    link: "https://www.pinterest.com/",
  },
];
function Footer() {
  return (
    <div className="w-full h-auto bg-gradient  bg-zinc-800 p-5 xl:px-40 ">
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-lg xl:text-xl text-gray-50">{contentFooter[0]}</h1>
          <div className=" flex flex-row justify-center gap-5 ">
                {socialLinkContact.map((item) => (
                  <SocialLinks
                    key={item.id}
                    element={item.element}
                    link={item.link}
                  />
                ))}
              </div>
        </div>
        <hr />
      </div>
      <div className="py-4 text-center font-mono text-gray-50 mx-auto">
        <p>{contentFooter[1]}</p>
      <small className="text-zinc-950 text-center">
        <a href={pB}>{credit}</a>
      </small>
      </div>
    </div>
  );
}
export default Footer;
