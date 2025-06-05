interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <div>Pokemon Memory Card</div>
      {children}
    </div>
  );
};
