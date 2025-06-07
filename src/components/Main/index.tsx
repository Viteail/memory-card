import classes from './main.module.css';

interface IMainProps {
  children: React.ReactNode;
}

export const Main: React.FC<IMainProps> = (props) => {
  const { children } = props;

  return <div className={classes.main}>{children}</div>;
};
