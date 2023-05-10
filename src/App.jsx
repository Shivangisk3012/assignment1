import React from "react";
import Invitegroup from "./groups/Invitegroup";
import TaskDate from "./groups/TaskDate";
import Deadline from "./groups/Deadline";
import TaskTopic from "./groups/TaskTopic";
import TaskTopic2 from "./groups/TaskTopic2";
import ReleatedDocument from "./groups/ReleatedDocument";
import Department from "./groups/Department";
function App() {
  return (

    <div className="w-[85%] mx-auto h-full py-4 relative bg-mainbg bg-no-repeat bg-cover bg-right-bottom
    ">
      <div className="flex flex-col gap-8">
        <TaskTopic/>
        <TaskTopic2/>
        <TaskDate />
        <Deadline />
        <Department/>
        <Invitegroup />
        <ReleatedDocument/>
      </div>
    </div>
  );
}

export default App;
