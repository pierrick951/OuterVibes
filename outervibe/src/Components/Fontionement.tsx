import Title from "./Title";
import TitleSection from "./TitleSection";
import { nanoid } from "nanoid";

const titleInfo: string = "Fonctionnement";

const contentForm = [
  {
    id: nanoid(),
    title: "1 - Prise de contact",
    content: "Je vous invite à remplir le formulaire ",
  },
  {
    id: nanoid(),
    title: "2 - Devis et préparation",
    content:
      "Après notre échange, j’étudierai votre projet. Vous recevrez un devis détaillé sous 48 heures.Dès réception de votre paiement, je commencerai la création de votre itinéraire complet.Je préparerai votre carnet de voyage personnalisé. ",
  },
  {
    id: nanoid(),
    title: "3 - Envoi du carnet et suivi",
    content:
      "Une fois terminé, le carnet vous sera envoyé. Vous pourrez en prendre connaissance, et nous réserverons ensemble. Il ne vous restera plus qu'à préparer vos valises et profiter. ",
  },
];
type Props = {};
function Fontionement({}: Props) {
  return (
    <div id="Fonctionnement" className="px-5 lg:px-36 xl:px-40 w-full h-auto ">
      <div className="p-5">
        <div className="pb">
          <Title title={titleInfo} />
        </div>
        <main className="">
          {contentForm.map((item) => (
            <div key={item.id} className="mb-5 p-5 bg-gradient-to-tr from-gray-50 to-zinc-100 shadow-2xl rounded-xl">
              <TitleSection title={item.title} />
              <hr />

              <div className=" flex flex-col text-xs lg:text-xl w-full py-2">
                <p className=" lg:max-w-3xl leading-9 text-zinc-800">{item.content}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
export default Fontionement;
