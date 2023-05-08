import React from "react";
import "./App.css";
import PhotoGroup from "./Components/PhotoGroup";
import InviteGroup from "./Components/InviteGroup";

function App() {
    const items = [
      "./assets/pic1.jpg",
      "./assets/pic2.jpg",
      "./assets/pic3.jpg",
      "./assets/pic4.jpg",
      "./assets/pic5.jpg",
      "./assets/pic6.jpg",

  
];

  return (
    
    <div className="App">
      <div className="group">

      <InviteGroup/>
      <PhotoGroup/>
      </div>
      {/* <div className="releated-document">
      <InviteGroup/>
      </div> */}
    </div>
  );
}

export default App;
