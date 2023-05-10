import Description from "../Components/Description"
import Participants from "../Components/Participants"


const Invitegroup = () => {
  return (
    <div className="flex gap-[5rem] h-[4rem] w-full">
        <Description imgsrc={"assets/group.png"} text={"Invited participants"}/>
        <Participants/>
    </div>
  )
}

export default Invitegroup