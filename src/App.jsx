import React from "react";
import Invitegroup from "./groups/Invitegroup";
import TaskDate from "./groups/TaskDate";
import Deadline from "./groups/Deadline";
import TaskTopic from "./groups/TaskTopic";
import TaskTopic2 from "./groups/TaskTopic2";
import ReleatedDocument from "./groups/ReleatedDocument";
import "./App.css"

function App() {
  return (

    <div className="App">
      <div className="maincontainer">
        <TaskTopic/>
        <TaskTopic2/>
        <TaskDate />
        <Deadline />
        
        <Invitegroup />
        <ReleatedDocument/>
      </div>
    </div>
  );
}

export default App;
