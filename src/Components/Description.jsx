const Description = ({imgsrc,text}) => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center w-[15%]">
        <img src={`/${imgsrc}`} alt="invite group" className="w-[1.5rem]"/>
        <p className="text-[12.5px] font-bold text-blue-500
        w-full text-center">{text}</p>
    </div>
  )
}

export default Description