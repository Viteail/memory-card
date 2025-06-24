import classes from "./pokeCard.module.css";

import type { IPokeData } from "../../App";

import pokeCardBack from "../../assets/pokeCardBack.jpg";

interface IPokeCardProps {
  data: IPokeData;
  onClick: () => void;
}

export const PokeCard: React.FC<IPokeCardProps> = (props) => {
  const { data, onClick } = props;
  const { name, spriteUrl } = data;

  return (
    <div className={classes.flipPokeCard}>
      <div className={classes.flipPokeCardInner}>
        <div className={classes.flipPokeCardFront} onClick={onClick}>
          <div className={classes.pokeImgWrapper}>
            <img className={classes.pokeImg} src={spriteUrl} />
          </div>
          <div>{name}</div>
        </div>
        <div className={classes.flipPokeCardBack}>
          <img className={classes.pokeCardBackImg} src={pokeCardBack} />
        </div>
      </div>
    </div>
  );
};
