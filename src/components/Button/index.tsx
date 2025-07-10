import classes from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  variant: "menu" | "header";
  onClick: () => void;
}

const VariantMap = {
  menu: classes.menu,
  header: classes.header,
};

export const Button: React.FC<IButtonProps> = (props) => {
  const { variant, children, onClick } = props;

  return (
    <>
      <button onClick={onClick} className={VariantMap[variant]}>
        {children}
      </button>
    </>
  );
};
