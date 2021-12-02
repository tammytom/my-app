import React from "react";
import './App.css';
// import logo from "./logo.svg"
import Data from "./Data.json"

const App = (props) => {
  return (
    <div className="header">
      {/* <img className="bg-img" src="./images/trees-6207925.jpg" alt=""></img>; */}
      {Data.map((data, key) => {
        return (
          <div className="section" key={key}>
            {/* <div className="topone">
              Welcome to my world.
            </div> */}
            <div style={{ width: "100%" }}>
              <p className="paragraph"> {data.para}</p>
              <h1 className="heading">{data.title}</h1>
            </div>
            <div className="pic" style={{ width: "50%" }}>
              {/* <img src={data.ImagePath} alt="img" /> */}
            </div>
          </div>)
      })}
    </div>
  );
}

export default App;
