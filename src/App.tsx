import { useEffect, useState } from "react";

import "./index.css";

import { Header, Instruction, Main, PokeCardList, Scores } from "./components";

import { generateUniqueRandomNumbers } from "./utils/randomInt";

export interface IPokeData {
  name: string;
  spriteUrl: string;
  id: number;
}

function App() {
  const [newGame, setNewGame] = useState(true);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [pokeDatas, setPokeDatas] = useState<IPokeData[]>([]);
  const [selectedPokemons, setSelectedPokemons] = useState<number[]>([]);

  const [randomizedPokeDatas, setRandomizedPokeDatas] = useState<IPokeData[]>(
    [],
  );

  console.log(pokeDatas);

  const handleClickPokeCard = (pokeId: number) => {
    if (selectedPokemons.includes(pokeId)) {
      setBestScore((prev) => (currentScore > prev ? currentScore : prev));
      setCurrentScore(0);
      setSelectedPokemons([]);
      setRandomizedPokeDatas([]);
      setNewGame(true);
      return;
    }
    setSelectedPokemons((prev) => [...prev, pokeId]);
    setCurrentScore((prev) => prev + 1);
    randomizeData();
  };

  useEffect(() => {
    if (!newGame) return;
    let ignore = false;

    const randomPokeIds = generateUniqueRandomNumbers(0, 1025, 20);

    const fetchPokemon = async () => {
      try {
        const promises = randomPokeIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        });

        const results = await Promise.all(promises);
        const data = results.map((res) => ({
          name: res.name,
          spriteUrl: res.sprites.front_default,
          id: res.id,
        }));
        setPokeDatas(data);
      } catch (error) {
        console.error("Error fetching pokemon data: ", error);
      }
    };
    if (!ignore) fetchPokemon();
    setNewGame(false);

    return () => {
      ignore = true;
    };
  }, [newGame]);

  const randomizeData = () => {
    const arr = [...pokeDatas];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    setRandomizedPokeDatas(arr);
  };

  return (
    <div>
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore}></Scores>
      </Header>
      <Main>
        <Instruction></Instruction>
        <PokeCardList
          handleClickPokeCard={handleClickPokeCard}
          pokeDatas={
            randomizedPokeDatas.length === 0 ? pokeDatas : randomizedPokeDatas
          }
        ></PokeCardList>
      </Main>
    </div>
  );
}

export default App;
