import React from "react";
import Homebar from "./groups/Homebar";
import Invitegroup from "./groups/Invitegroup";
import TaskDate from "./groups/TaskDate";
import Deadline from "./groups/Deadline";
import TaskTopic from "./groups/TaskTopic";
import TaskTopic2 from "./groups/TaskTopic2";
import ReleatedDocument from "./groups/ReleatedDocument";
import "./Styles/App.css"
import Department from "./groups/Department";


function App() {
  return (
    <>
    <div className="App">
      <Homebar/>
      <div className="maincontainer">
        <TaskTopic />
        <TaskTopic2 />
        <TaskDate />
        <Deadline />
        <Department/>
        <Invitegroup />
        <ReleatedDocument />
      </div>
    </div>
    </>
  );
}

export default App;
