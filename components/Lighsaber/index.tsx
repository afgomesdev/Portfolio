import { useState } from "react";
import { Container } from "./styles";

export function Lighsaber(): JSX.Element {
  const [lightsaber, SetLightsaber] = useState("green");

  return (
    <Container>
      <label htmlFor="green">Green</label>
      <input
        type="radio"
        id="green"
        name="color"
        checked={lightsaber === "green"}
        onChange={() => SetLightsaber("green")}
      />
      <label htmlFor="blue">Blue</label>
      <input
        type="radio"
        id="blue"
        name="color"
        checked={lightsaber === "blue"}
        onChange={() => SetLightsaber("blue")}
      />
      <label htmlFor="yellow">Yellow</label>
      <input
        type="radio"
        id="yellow"
        name="color"
        checked={lightsaber === "yellow"}
        onChange={() => SetLightsaber("yellow")}
      />
      <label htmlFor="purple">Purple</label>
      <input
        type="radio"
        id="purple"
        name="color"
        checked={lightsaber === "purple"}
        onChange={() => SetLightsaber("purple")}
      />
      <label htmlFor="red">Red</label>
      <input
        type="radio"
        id="red"
        name="color"
        checked={lightsaber === "red"}
        onChange={() => SetLightsaber("red")}
      />
      <label htmlFor="darksaber">Darksaber</label>
      <input
        type="radio"
        id="darksaber"
        name="color"
        checked={lightsaber === "dark"}
        onChange={() => SetLightsaber("dark")}
      />

      <div className="lightsaber">
        <input type="checkbox" id="on-off" />
        <div className="blade"></div>
        <label className="hilt" htmlFor="on-off"></label>
        <embed src="https://assets.codepen.io/308367/coolsaber.mp3" type="" />
      </div>
      <a href="https://youtu.be/CBw9-K6hYVA" className="yt">
        See how Kevin Powell made it
      </a>
    </Container>
  );
}

export default Lighsaber;
