import Description from "../Components/Description"
import DescriptionTask from "../Components/DescriptionTask"

const TaskTopic = () => {
    return (
        <div className="flex gap-[5.2rem] h-auto w-full">
            <Description imgsrc={"assets/Task.png"} text={"Task Topic"} />
            <DescriptionTask text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquamorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam  "}/>
        </div>

    )
}

export default TaskTopic