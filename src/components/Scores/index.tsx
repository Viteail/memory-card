import classes from "./scores.module.css";

interface IScoresProps {
  bestScore: number;
  currentScore: number;
}

export const Scores: React.FC<IScoresProps> = (props) => {
  const { bestScore, currentScore } = props;

  return (
    <div className={classes.wrapper}>
      <div>Best Score: {bestScore}</div>
      <div>Current Score: {currentScore}</div>
    </div>
  );
};
