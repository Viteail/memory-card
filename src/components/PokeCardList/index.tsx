import classes from "./pokeCardList.module.css";

import { PokeCard } from "../PokeCard";

import type { IPokeData } from "../../App";

interface IPokeCardListProps {
  pokeDatas: IPokeData[];
  loading: boolean;
  handleClickPokeCard: (pokeId: number) => void;
}

export const PokeCardList: React.FC<IPokeCardListProps> = (props) => {
  const { pokeDatas, handleClickPokeCard, loading } = props;

  return (
    <div className={classes.pokeCardList}>
      {pokeDatas.map((data) => (
        <PokeCard
          loading={loading}
          key={data.id}
          data={data}
          onClick={() => handleClickPokeCard(data.id)}
        ></PokeCard>
      ))}
    </div>
  );
};
