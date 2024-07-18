

type TabItemProps = {
    objet: {
      id: string;
      ico: JSX.Element;
      text: string;
    };
  };
const TabItemComponent = ({ objet }: TabItemProps) => (

  <div
    key={objet.id}
    className="h-50 bg-gradient-to-br from-gray-100 to-zinc-100 flex flex-col justify-center items-center md:w-96 shadow-xl p-5 rounded-2xl"
  >
    <p className="text-red-500 text-3xl lg:text-5xl">{objet.ico}</p>
    <p className="text-zinc-800 py-2">{objet.text}</p>
  </div>
  
);

export default TabItemComponent;
