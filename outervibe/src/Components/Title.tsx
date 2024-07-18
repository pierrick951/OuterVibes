type Props = {
    title:string
}



function Title({title}: Props) {
  return (
    <div>
    <h1 className="text-zinc-800 text-xl lg:text-3xl font-semibold pb-10">{title}</h1>
    <hr />
  </div>
  )
}
export default Title