import { useState } from "react";

import "./index.css";

import { Header, Instruction, Main, PokeCardList, Scores } from "./components";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="">
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore}></Scores>
      </Header>
      <Main>
        <Instruction></Instruction>
        <PokeCardList></PokeCardList>
      </Main>
    </div>
  );
}

export default App;
