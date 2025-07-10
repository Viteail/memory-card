import classes from "./header.module.css";

import { Button } from "../Button";

interface IHeaderProps {
  children: React.ReactNode;
  onClickShowMenu: () => void;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { children, onClickShowMenu } = props;

  return (
    <div className={classes.header}>
      <div className={classes.btnWrapper}>
        <Button onClick={onClickShowMenu} variant="header">
          Menu
        </Button>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.title}>Pokémon Memory Game</div>
        {children}
      </div>
    </div>
  );
};
