import Description from "../Components/Description"
import DescriptionTask from "../Components/DescriptionTask"
function TaskTopic2() {
  return (
    <div className="flex gap-[5.2rem] h-auto w-full">
    <Description imgsrc={"assets/Task.png"} text={"Description Of the Task"} />
    <DescriptionTask text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquamorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam  "}/>
</div>
  )
}

export default TaskTopic2