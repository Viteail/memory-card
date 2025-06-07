import classes from "./pokeCard.module.css";

import type { IPokeData } from "../PokeCardList";

interface IPokeCardProps {
  data: IPokeData;
}

export const PokeCard: React.FC<IPokeCardProps> = (props) => {
  const { data } = props;
  const { name, spriteUrl } = data;

  return (
    <div className={classes.pokeCard}>
      <div className={classes.pokeImgWrapper}>
        <img className={classes.pokeImg} src={spriteUrl} />
      </div>
      <div>{name}</div>
    </div>
  );
};
