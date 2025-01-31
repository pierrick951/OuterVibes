import { nanoid } from "nanoid";
import { Toaster, toast } from "sonner";
import { useForm } from "@formspree/react";
import Title from "../Components/Title";
import montreal from "../assets/Montreal2.jpg";
import SocialLinks from "./SocialLinks";
import { SocialeType, contentFormType } from "../type";

import { FaPinterest, IoLogoInstagram, LuLinkedin } from "../Icone-index";

const buttonSubmit: string = "Envoyer";
const titleForm: string = "Contact";

const contentForm: contentFormType = [
  {
    id: nanoid(),
    placeholder: "Entrer votre prénom",
    label: "Prenom",
    type: "text",
    aria: "votre prénom",
    name: "prenom",
  },
  {
    id: nanoid(),
    placeholder: "Entrer votre nom",
    label: "Nom",
    type: "text",
    aria: "votre nom",
    name: "nom",
  },
  {
    id: nanoid(),
    placeholder: "Entrer votre Email",
    label: "Email",
    type: "email",
    aria: "votre email",
    name: "email",
  },
];

const socialLinkContact: SocialeType = [
  {
    id: nanoid(),
    element: <IoLogoInstagram color="#1c1c1c" className="w-5" />,
    link: "https://www.instagram.com/outervibes.trvl/?__d=1%3Futm_source%3Dig_embed",
  },
  {
    id: nanoid(),
    element: <LuLinkedin color="#1c1c1c" className="w-5" />,
    link: "https://www.linkedin.com/in/gaelle-boudassou/",
  },
  {
    id: nanoid(),
    element: <FaPinterest color="#1c1c1c" className="w-8" />,
    link: "https://www.pinterest.com/",
  },
];

const textAreaContent: string[] = [
  "Indiquez-moi votre formule, budget et destination.",
  "Votre texte",
  "message",
];
const ariaForm:string = ' Formulaire'
function Contact() {
  const [state, handleSubmit] = useForm("mdknkrjp");

  const handleClick: (event: any) => void = (event) => {
    handleSubmit(event).then(() => {
      if (state.succeeded) {
        toast.success("Formulaire soumis avec succès !");
      }
    });
  };

  return (
    <div
      id="contact"
      className="px-5 lg:px-36 xl:px-40 w-full flex  py-8 lg:py-10 text-start flex-col justify-center items-center"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 mt-4 flex flex-col h-auto w-full max-w-6xl">
        <div className="text-center xl:text-start">
          <Title title={titleForm} />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center lg:justify-around min-w-fit max-w-6xl gap-7 ">
          <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 ">
            <form
              method="POST"
              onSubmit={handleClick}
              aria-label={ariaForm}
              className="flex flex-col gap-4 w-full lg:max-w-sm"
            >
              {contentForm.map((item) => (
                <div key={item.id} className="flex flex-col w-full">
                  <label
                     htmlFor={item.name}
                    className="text-gray-700 font-bold py-2"
                  >
                    {item.label}
                  </label>
                  <input
                    required
                    type={item.type}
                    placeholder={item.placeholder}
                    aria-label={item.aria}
                    name={item.name}
                    className="py-2 px-3 border border-gray-300 rounded-xl focus:outline-red-400 w-full"
                  />
                </div>
              ))}
              <label
                htmlFor={textAreaContent[2]}
                className="text-gray-700 font-bold"
              >
                {textAreaContent[1]}
              </label>
              <textarea
                required
               name={textAreaContent[2]}
                id={textAreaContent[2]}
                placeholder={textAreaContent[0]}
                aria-label={textAreaContent[1]}
                className="py-2 px-3 border border-gray-300 rounded-2xl focus:outline-red-400 w-full"
                rows={4}
              />
              <div className="text-center py-4 w-full bg-red-500 hover:bg-red-300 rounded-xl">
                <Toaster richColors />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="  text-white font-bold"
                >
                  {buttonSubmit}
                </button>
              </div>
            </form>
          </div>
          <div className="hidden xl:flex w-1/2 py-2 flex-col justify-between">
            <div>
              <img
                src={montreal}
                alt="Montreal skyline"
                className="rounded-2xl w-full min-h-full object-cover"
              />
            </div>
            <div className="flex flex-row justify-center gap-5 ">
              {socialLinkContact.map((item) => (
                <SocialLinks
                  key={item.id}
                  element={item.element}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
