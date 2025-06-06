import { useEffect, useState } from "react";

import { generateUniqueRandomNumbers } from "../../utils/randomInt";
import { PokeCard } from "../PokeCard";

export interface IPokeData {
  name: string;
  sprite: string;
}

export const PokeCardList = () => {
  const [pokeDatas, setPokeDatas] = useState<IPokeData[]>([]);
  const randomPokeIds = generateUniqueRandomNumbers(0, 1025, 12);
  console.log(randomPokeIds);

  useEffect(() => {
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
          sprite: res.sprites.front_default,
        }));
        setPokeDatas(data);
      } catch (error) {
        console.error("Error fetching pokemon data: ", error);
      }
    };
    fetchPokemon();
  }, []);

  return <div>{pokeDatas.map((data, index) => <PokeCard key={index} data={data}></PokeCard>)}</div>;
};
