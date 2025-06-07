import classes from "./header.module.css";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { children } = props;

  return (
    <div className={classes.header}>
      <div className={classes.title}>Pokémon Memory Game</div>
      {children}
    </div>
  );
};
