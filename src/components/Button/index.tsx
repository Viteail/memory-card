import classes from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  variant: "menu";
  onClick: () => void;
}

const VariantMap = {
  menu: classes.menu,
};

export const Button: React.FC<IButtonProps> = (props) => {
  const { variant, children, onClick } = props;

  return (
    <>
      <button onClick={onClick} className={VariantMap[variant]}>{children}</button>
    </>
  );
};
