import { areaData, gaugeData } from "./data.json";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GaugeCircle from "./components/GaugeCircle";
import LineChart from "./components/LineChart";

function App() {
  console.log(gaugeData);
  const [name, setName] = useState("Quality Score");
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            {gaugeData.map((data) => (
              <button
                type="button"
                className="chartButton"
                key={data.name}
                onClick={() => setName(data.name)}
              >
                <GaugeCircle data1={data}></GaugeCircle>
              </button>
            ))}
          </div>
          <div className="col">
            <LineChart data={areaData[name]} name={name}></LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
