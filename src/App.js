import "./App.css";
import { useState } from "react";

function App() {
  const [sectionCount, setSectionCount] = useState(1);
  const [doorHeight, setDoorHeight] = useState(1);
  const [doorWidth, setDoorWidth] = useState(1);
  const [direction, setDirection] = useState("row");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const ratio = doorHeight / doorWidth;

  const WIDTH = 400;

  return (
    <div className="App">
      <div className="input-container">
        <label htmlFor="door-sections">Nr. of sections</label>
        <input
          name="door-sections"
          type="number"
          min="1"
          value={sectionCount}
          onChange={(e) => setSectionCount(+e.target.value)}
        />

        <label htmlFor="door-height">Height</label>
        <input
          name="door-height"
          type="number"
          min="1"
          value={doorHeight}
          onChange={(e) => setDoorHeight(+e.target.value)}
        />

        <label htmlFor="door-width">Width</label>
        <input
          name="door-width"
          type="number"
          min="1"
          value={doorWidth}
          onChange={(e) => setDoorWidth(+e.target.value)}
        />
      </div>
      <div className="button-container">
        <button
          onClick={() => setDirection(direction === "row" ? "column" : "row")}
        >
          Change direction
        </button>
        <button onClick={() => setShouldAnimate(!shouldAnimate)}>
          {shouldAnimate ? "Stop animation" : "Start animation"}
        </button>
      </div>
      <div
        className="container"
        style={{
          height: WIDTH * ratio + "px",
          width: WIDTH + "px",
        }}
      >
        <div
          className={`door ${
            shouldAnimate && direction === "row"
              ? "move-horizontally"
              : shouldAnimate && direction === "column"
              ? "move-vertically"
              : ""
          }`}
          style={{ flexDirection: direction }}
        >
          {new Array(sectionCount).fill("").map((e) => (
            <div
              key={Math.random()}
              className="section"
              style={{
                height:
                  direction === "row"
                    ? "100%"
                    : (WIDTH * ratio) / sectionCount + "px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
