import classes from "./menu.module.css";

import { Button } from "../Button";

interface IMenuProps {
  onClickStartGame: (value: number) => void;
}

export const Menu: React.FC<IMenuProps> = (props) => {
  const { onClickStartGame } = props;

  return (
    <div className={`${classes.menu} ${classes.pixelBorder}`}>
      <div className={classes.text}>Select difficulty.</div>
      <div className={classes.btnsWrapper}>
        <Button onClick={() => onClickStartGame(5)} variant="menu">
          EASY
        </Button>
        <Button onClick={() => onClickStartGame(12)} variant="menu">
          MEDIUM
        </Button>
        <Button onClick={() => onClickStartGame(24)} variant="menu">
          HARD
        </Button>
      </div>
    </div>
  );
};
