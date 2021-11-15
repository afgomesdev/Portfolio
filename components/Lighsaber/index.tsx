import { useState } from "react";
import { Container } from "./styles";

export function Lighsaber(): JSX.Element {
  const [greensaber, SetGreensaber] = useState(true);
  const [bluesaber, SetBluesaber] = useState(false);
  const [yellowsaber, SetYellowsaber] = useState(false);
  const [purplesaber, SetPurplesaber] = useState(false);
  const [redsaber, SetRedsaber] = useState(false);
  const [darksaber, SetDarksaber] = useState(false);

  return (
    <Container>
      <label htmlFor="green">Green</label>
      <input
        type="radio"
        id="green"
        name="color"
        checked={greensaber}
        onChange={() => SetGreensaber(true)}
      />
      <label htmlFor="blue">Blue</label>
      <input
        type="radio"
        id="blue"
        name="color"
        checked={bluesaber}
        onChange={() => SetBluesaber(true)}
      />
      <label htmlFor="yellow">Yellow</label>
      <input
        type="radio"
        id="yellow"
        name="color"
        checked={yellowsaber}
        onChange={() => SetYellowsaber(true)}
      />
      <label htmlFor="purple">Purple</label>
      <input
        type="radio"
        id="purple"
        name="color"
        checked={purplesaber}
        onChange={() => SetPurplesaber(true)}
      />
      <label htmlFor="red">Red</label>
      <input
        type="radio"
        id="red"
        name="color"
        checked={redsaber}
        onChange={() => SetRedsaber(true)}
      />
      <label htmlFor="darksaber">Darksaber</label>
      <input
        type="radio"
        id="darksaber"
        name="color"
        checked={darksaber}
        onChange={() => SetDarksaber((prev) => !prev)}
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
