import React from "react";
import myJokes from "../jokes";
import Joker from "./Joker";

export default function Joke() {
  const jokeElem = myJokes.map((joke) => {
    return (
      <Joker key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    );
  });
  return <div>{jokeElem}</div>;
}
