import type { IPokeData } from "../PokeCardList";

interface IPokeCardProps {
  data: IPokeData;
}

export const PokeCard: React.FC<IPokeCardProps> = (props) => {
  const { data } = props;
  const { name, sprite } = data;

  return (
    <div>
      <div>
        <img src={sprite} />
      </div>
      <div>{name}</div>
    </div>
  );
};
