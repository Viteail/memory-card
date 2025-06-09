import classes from "./pokeCard.module.css";

import type { IPokeData } from "../../App";

interface IPokeCardProps {
  data: IPokeData;
  onClick: () => void;
}

export const PokeCard: React.FC<IPokeCardProps> = (props) => {
  const { data, onClick } = props;
  const { name, spriteUrl } = data;

  return (
    <div className={classes.pokeCard} onClick={onClick}>
      <div className={classes.pokeImgWrapper}>
        <img className={classes.pokeImg} src={spriteUrl} />
      </div>
      <div>{name}</div>
    </div>
  );
};
