interface IScoresProps {
  bestScore: number;
  currentScore: number;
}

export const Scores: React.FC<IScoresProps> = (props) => {
  const { bestScore, currentScore } = props;

  return (
    <div>
      <div>Best Score: {bestScore}</div>
      <div>Current Score: {currentScore}</div>
    </div>
  );
};
