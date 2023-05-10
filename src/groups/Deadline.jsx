import Description from "../Components/Description"
import Date from "../Components/Date"

const Deadline = () => {
    return (
        <div className="flex gap-[5.2rem] h-[4rem] w-full">
            <Description imgsrc={"assets/date.png"} text={"Deadline of the task"} />
            <Date date={"Thu,Apr 20,2023 11:58 AM"}/>
        </div>

    )
}

export default Deadline