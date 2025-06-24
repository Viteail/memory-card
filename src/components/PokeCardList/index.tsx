import classes from "./pokeCardList.module.css";

import { PokeCard } from "../PokeCard";

import type { IPokeData } from "../../App";

interface IPokeCardListProps {
  pokeDatas: IPokeData[];
  handleClickPokeCard: (pokeId: number) => void;
}

export const PokeCardList: React.FC<IPokeCardListProps> = (props) => {
  const { pokeDatas, handleClickPokeCard } = props;

  return (
    <div className={classes.pokeCardList}>
      {pokeDatas.map((data) => (
        <PokeCard
          key={crypto.randomUUID()}
          data={data}
          onClick={() => handleClickPokeCard(data.id)}
        ></PokeCard>
      ))}
    </div>
  );
};
