interface IMainProps {
  children: React.ReactNode;
}

export const Main: React.FC<IMainProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};
