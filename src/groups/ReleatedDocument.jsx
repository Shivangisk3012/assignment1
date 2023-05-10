import Description from "../Components/Description"
import DescriptionTask from "../Components/DescriptionTask"

function ReleatedDocument() {
  return (
    <div className="flex gap-[5.2rem] h-auto w-full">
    <Description imgsrc={"assets/Task.png"} text={"Releated Document"} />
    <DescriptionTask text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquamorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam  "}/>
</div>
  )
}

export default ReleatedDocument