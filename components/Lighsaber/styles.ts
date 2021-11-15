import styled from "styled-components";

export const Container = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px 50px 1fr;
  min-height: calc(100vh - 121px);
  place-items: center;
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;

  [name="color"] {
    grid-row: 1 / 2;
    align-self: end;
    margin: 0.5em;
  }

  label:not(.hilt) {
    color: white;
    font-weight: bold;
    align-self: start;
  }

  /* Lightsaber styling */

  .lightsaber {
    margin-top: 40vh;
    grid-column: 1 / -1;
    position: relative;
  }

  #on-off {
    position: absolute;
    width: 0;
    height: 0;
  }

  .hilt {
    cursor: pointer;
    display: block;
    width: 0.75rem;
    height: 7rem;
    background-color: red;
    border-radius: 0 0 4px 4px;
    background-image: linear-gradient(
      silver 0 10px,
      hsl(39 75% 50%) 0 14px,
      silver 0 15px,
      black 0 20px,
      silver 0 22px,
      black 0 25px,
      silver 0 27px,
      black 0 30px,
      silver 0 32px,
      black 0 35px,
      silver 0 37px,
      black 0 40px,
      silver 0 42px,
      black 0 45px,
      silver 0 47px,
      black 0 50px,
      silver 0 60px,
      hsl(39 75% 50%) 60px 80px,
      silver 0 100%
    );
  }

  .blade {
    position: absolute;
    background: white;
    height: 350%;
    width: 100%;
    bottom: 100%;
    border-radius: 100vw 100vw 0 0;
    box-shadow: inset 0 0 4px
        hsl(var(--blade-hue) 100% var(--blade-lightness) / 1),
      0 0 1em hsl(var(--blade-hue) 100% var(--blade-lightness) / 0.8),
      0 0 1.5em hsl(var(--blade-hue) 100% var(--blade-lightness) / 0.7),
      0 0 2em hsl(var(--blade-hue) 100% var(--blade-lightness) / 0.5),
      0 0 3em hsl(var(--blade-hue) 100% var(--blade-lightness) / 0.3),
      0 0 5em hsl(var(--blade-hue) 100% var(--blade-lightness) / 0.2);

    transition: transform 50ms ease-out;
    transform-origin: bottom;
  }

  .blade::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: hsl(var(--blade-hue) 100% var(--blade-lightness));
    border-radius: inherit;
    filter: blur(0.5em);
    opacity: 1;
    animation: pulse linear 5s infinite;
  }

  .blade::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    border-radius: inherit;
    z-index: 10;
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  /* Turn lightsaber on and off */

  #on-off:not(:checked) + .blade {
    transform: scaleY(0);
  }

  #on-off:checked + .blade {
    transform: scaleY(1);
  }

  /* change the color */

  #green:checked ~ .lightsaber {
    --blade-hue: 120;
  }

  #blue:checked ~ .lightsaber {
    --blade-hue: 195;
  }

  #yellow:checked ~ .lightsaber {
    --blade-hue: 60;
  }

  #purple:checked ~ .lightsaber {
    --blade-hue: 290;
  }

  #red:checked ~ .lightsaber {
    --blade-hue: 360;
  }

  #darksaber:checked ~ .lightsaber {
    --blade-lightness: 100%;
  }

  #darksaber:checked ~ .lightsaber .blade {
    border-radius: 100% / 500px 10px 0 0;
  }

  #darksaber:checked ~ .lightsaber .blade::before {
    background: black;
  }

  /* play sound */

  embed {
    display: none;
    position: absolute;
    opacity: 0;
    pointer-events: 0;
    width: 0;
    height: 0;
  }

  #on-off:checked ~ embed {
    display: block;
  }

  /* YT link */
  .yt {
    color: hsl(0 0% 100% / 0.5);
    font-size: 1rem;
    padding: 1em;
    margin: 0 0 1em 0;
    grid-column: 1 / -1;
  }

  .yt:hover {
    color: white;
    text-shadow: 0 0 0.5em hsl(var(--blade-hue) 50% 50%),
      0 0 1em hsl(var(--blade-hue) 50% 50% / 0.75);
  }
`;