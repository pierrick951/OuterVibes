import Title from "./Title"


const titleInfo:string="Fonctionnement"


type Props = {}
function Fontionement({}: Props) {
  return (
    <div id="Fonctionnement" className="px-5 lg:px-36 xl:px-40 w-full h-auto ">
      <div className="p-5 shadow-xl rounded-xl bg-gradient-to-tr from-gray-50 to-zinc-100">
        <Title title={titleInfo}/>
      </div>
    </div>
  )
}
export default Fontionement