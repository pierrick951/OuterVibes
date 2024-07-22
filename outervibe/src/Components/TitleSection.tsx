type Props = {
    title:string
}



function Title({title}: Props) {
  return (
    <div>
    <h1 className="text-zinc-800 text-lg lg:text-xl font-semibold pb-5">{title}</h1>

  </div>
  )
}
export default Title