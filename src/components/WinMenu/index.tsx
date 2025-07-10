import classes from "./winMenu.module.css";

import { Button } from "../Button";

interface IWinMenuProps {
  onClickShowMenu: () => void;
  onClickPlayAgain: () => void;
}

export const WinMenu: React.FC<IWinMenuProps> = (props) => {
  const { onClickShowMenu, onClickPlayAgain } = props;

  return (
    <div className={`${classes.winMenu} ${classes.pixelBorder}`}>
      <div className={classes.text}>You Won!</div>
      <div className={classes.btnsWrapper}>
        <Button onClick={onClickShowMenu} variant="menu">
          Menu
        </Button>
        <Button onClick={onClickPlayAgain} variant="menu">
          Play Again
        </Button>
      </div>
    </div>
  );
};
