import { useEffect, useRef, useState } from "react";

import "./index.css";

import {
  Header,
  Instruction,
  Main,
  PokeCardList,
  Scores,
  LoadingSpin,
} from "./components";

import { generateUniqueRandomNumbers } from "./utils/randomInt";

export interface IPokeData {
  name: string;
  spriteUrl: string;
  id: number;
}

function App() {
  const isInitialRender = useRef(true);

  const [newGame, setNewGame] = useState(true);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [isLoading, setLoading] = useState(true);

  const [pokeDatas, setPokeDatas] = useState<IPokeData[]>([]);
  const [selectedPokemons, setSelectedPokemons] = useState<number[]>([]);

  const handleClickPokeCard = (pokeId: number) => {
    if (selectedPokemons.includes(pokeId)) {
      setBestScore((prev) => (currentScore > prev ? currentScore : prev));
      setCurrentScore(0);
      setSelectedPokemons([]);
      setNewGame(true);
      return;
    }
    setSelectedPokemons((prev) => [...prev, pokeId]);
    setCurrentScore((prev) => prev + 1);
    randomizeData();
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (!newGame) return;
    let ignore = false;

    const fetchPokemon = async () => {
      const randomPokeIds = generateUniqueRandomNumbers(1, 1025, 20);
      try {
        setLoading(true);
        setNewGame(false);

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

        if (ignore) setPokeDatas(data);
      } catch (error) {
        console.error("Error fetching pokemon data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();

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

    setPokeDatas(arr);
  };

  return (
    <>
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore}></Scores>
      </Header>
      <Main>
        <Instruction></Instruction>
        {isLoading ? (
          <LoadingSpin></LoadingSpin>
        ) : (
          <PokeCardList
            handleClickPokeCard={handleClickPokeCard}
            pokeDatas={pokeDatas}
          ></PokeCardList>
        )}
      </Main>
    </>
  );
}

export default App;
