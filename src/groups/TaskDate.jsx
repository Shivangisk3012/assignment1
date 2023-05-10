import Description from "../Components/Description"
import Date from "../Components/Date"

const TaskDate = () => {
    return (
        <div className="flex gap-[5.2rem] h-auto w-full">
            <Description imgsrc={"assets/date.png"} text={"Date of the task"} />
            <Date date={"Thu,Apr 20,2023 11:58 AM"}/>
        </div>

    )
}

export default TaskDate